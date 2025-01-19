// this selects the right date, but websocket won't save on refresh
import React, { useState, useEffect } from "react";
import {
  format,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  addMonths,
  isBefore,
  isSameDay,
} from "date-fns";
import { useQuery, useMutation } from "@apollo/client";
import { GET_AVAILABILITIES } from "../utils/queries";
import { SET_AVAILABILITY } from "../utils/mutations";

function Cal() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [availabilityStates, setAvailabilityStates] = useState({});
  const names = ["T", "M", "B", "H", "J"];
  const currentDate = new Date();

  const { data, loading } = useQuery(GET_AVAILABILITIES, {
    variables: {
      startDate: format(startOfMonth(selectedDate), "yyyy-MM-dd"),
      endDate: format(endOfMonth(selectedDate), "yyyy-MM-dd"),
    },
  });

  const [setAvailability] = useMutation(SET_AVAILABILITY, {
    refetchQueries: [GET_AVAILABILITIES],
  });

  useEffect(() => {
    if (data?.getAvailabilities) {
      const organizedData = data.getAvailabilities.reduce((acc, entry) => {
        const dateKey = format(new Date(entry.date), "yyyy-MM-dd");
        if (!acc[dateKey]) acc[dateKey] = {};
        acc[dateKey][entry.user] = entry.status;
        return acc;
      }, {});
      setAvailabilityStates(organizedData);
    }
  }, [data]);

  const days = eachDayOfInterval({
    start: startOfMonth(selectedDate),
    end: endOfMonth(selectedDate),
  });

  const handleRowClick = (date, user, currentState) => {
    if (isBefore(date, currentDate) && !isSameDay(date, currentDate)) return;

    const nextState =
      currentState === "normal" ? "green" : currentState === "green" ? "red" : "normal";

    setAvailabilityStates((prevState) => ({
      ...prevState,
      [format(date, "yyyy-MM-dd")]: {
        ...prevState[format(date, "yyyy-MM-dd")],
        [user]: nextState,
      },
    }));

    setAvailability({
      variables: {
        date: format(date, "yyyy-MM-dd"),
        user,
        status: nextState,
      },
    });
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="calendar">
      {/* Calendar Header */}
      <div className="calendar-header">
        <button onClick={() => setSelectedDate((d) => addMonths(d, -1))}>Previous</button>
        <h2>{format(selectedDate, "MMMM yyyy")}</h2>
        <button onClick={() => setSelectedDate((d) => addMonths(d, 1))}>Next</button>
      </div>

      {/* Calendar Grid */}
      <div className="calendar-grid">
        {days.map((day) => {
          const dateKey = format(day, "yyyy-MM-dd");
          const isToday = isSameDay(day, currentDate);
          const isPast = isBefore(day, currentDate) && !isToday;

          return (
            <div
              key={dateKey}
              className={`calendar-day ${isToday ? "current-date" : ""} ${
                isPast ? "past-date" : ""
              }`}
            >
              <div className="date-label">{format(day, "EEE, MMM d")}</div>
              <div className="note-row">
                {names.map((name) => {
                  const userState =
                    availabilityStates[dateKey]?.[name] || "normal";

                  return (
                    <div
                      key={name}
                      className={`note-row-item ${userState}`}
                      onClick={() => handleRowClick(day, name, userState)}
                    >
                      {name}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Cal;