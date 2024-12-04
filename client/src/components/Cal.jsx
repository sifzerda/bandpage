import { io } from "socket.io-client";
import React, { useState, useEffect, useCallback } from "react";
import {
  format,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  startOfWeek,
  endOfWeek,
  addMonths,
  isBefore,
  isToday,
  startOfDay,
} from "date-fns";
import debounce from "lodash.debounce"; // Install via npm
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_CALENDAR } from "../utils/queries"; // GraphQL queries and mutations
import { UPDATE_CALENDAR } from "../utils/mutations";

const socket = io("http://localhost:3001");

const getDayWithSuffix = (day) => {
  const dayOfMonth = format(day, "d");
  const lastDigit = dayOfMonth % 10;

  if (dayOfMonth >= 11 && dayOfMonth <= 13) return `${dayOfMonth}th`;
  if (lastDigit === 1) return `${dayOfMonth}st`;
  if (lastDigit === 2) return `${dayOfMonth}nd`;
  if (lastDigit === 3) return `${dayOfMonth}rd`;
  return `${dayOfMonth}th`;
};

function Cal() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [rowStates, setRowStates] = useState({});
  const [highlightedRows, setHighlightedRows] = useState({});
  const names = ["Troy", "Megan", "Brad", "Harold", "Jonathan"];
  const today = startOfDay(new Date());

  const { loading, error, data } = useQuery(QUERY_CALENDAR);
  const { updateCalendar } = useMutation(UPDATE_CALENDAR);
 
  const changeMonth = (offset) => {
    setSelectedDate((prevDate) => addMonths(prevDate, offset));
  };

  const startDate = startOfWeek(startOfMonth(selectedDate));
  const endDate = endOfWeek(endOfMonth(selectedDate));
  const days = eachDayOfInterval({ start: startDate, end: endDate });

  const handleRowClick = (date, index) => {
    const dateKey = format(date, "yyyy-MM-dd");
    setRowStates((prev) => {
      const dayState = prev[dateKey] || {};
      const currentState = dayState[index] || "normal";
      const nextState =
        currentState === "normal" ? "green" : currentState === "green" ? "red" : "normal";

      const updatedState = {
        ...prev,
        [dateKey]: {
          ...dayState,
          [index]: nextState,
        },
      };

      socket.emit("update-state", { dateKey, index, state: nextState });
      return updatedState;
    });
  };

  const debounceSave = useCallback(
    debounce(() => {
      updateCalendar({ variables: { state: rowStates } });
    }, 1000),
    [rowStates, updateCalendar]
  );

  useEffect(() => {
    debounceSave();
    return debounceSave.cancel;
  }, [rowStates, debounceSave]);

  useEffect(() => {
    if (data && data.getCalendarState) {
      setRowStates(data.getCalendarState);
    }

    socket.on("load-state", (savedState) => {
      if (savedState) setRowStates(savedState);
    });

    socket.on("state-updated", ({ dateKey, index, state }) => {
      setRowStates((prev) => ({
        ...prev,
        [dateKey]: {
          ...prev[dateKey],
          [index]: state,
        },
      }));

      setHighlightedRows((prev) => ({
        ...prev,
        [dateKey]: { ...prev[dateKey], [index]: true },
      }));

      setTimeout(() => {
        setHighlightedRows((prev) => ({
          ...prev,
          [dateKey]: { ...prev[dateKey], [index]: false },
        }));
      }, 2000);
    });

    return () => {
      socket.off("load-state");
      socket.off("state-updated");
    };
  }, [data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="calendar">
      <div className="calendar-header">
        <button onClick={() => changeMonth(-1)}>Previous</button>
        <h2>{format(selectedDate, "MMMM yyyy")}</h2>
        <button onClick={() => changeMonth(1)}>Next</button>
      </div>

      <div className="calendar-grid">
        {days.map((day) => {
          const isPast = isBefore(startOfDay(day), today);
          const isCurrentDay = isToday(day);
          const dateKey = format(day, "yyyy-MM-dd");
          const dayState = rowStates[dateKey] || {};

          return (
            <div
              key={day}
              className={`calendar-day ${isPast ? "past-day" : ""} ${
                isCurrentDay ? "current-day" : ""
              }`}
            >
              <div className="date-label">
                <span className="day-name">{format(day, "EEE")}</span>{" "}
                {getDayWithSuffix(day)}
              </div>
              {!isPast && (
                <div className="note-row">
                  {names.map((name, index) => (
                    <div
                      key={name}
                      className={`note-row-item ${dayState[index] || "normal"} ${
                        highlightedRows[dateKey]?.[index] ? "updated" : ""
                      }`}
                      onClick={() => handleRowClick(day, index)}
                    >
                      {name}
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Cal;