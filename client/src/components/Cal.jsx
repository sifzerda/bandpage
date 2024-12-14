import React, { useState } from "react";
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
  const names = ["Troy", "Megan", "Brad", "Harold", "Jonathan"];
  const currentDate = new Date();
  const [setAvailability] = useMutation(SET_AVAILABILITY, {
    refetchQueries: [GET_AVAILABILITIES],
  });

  const days = eachDayOfInterval({
    start: startOfMonth(selectedDate),
    end: endOfMonth(selectedDate),
  });

  const handleRowClick = (date, user, currentState) => {
    if (isBefore(date, currentDate) && !isSameDay(date, currentDate)) return; // Allow interaction only for today or future dates

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
          const { data } = useQuery(GET_AVAILABILITIES, { variables: { date: dateKey } });
          const isToday = isSameDay(day, currentDate); // Check if the day is today
          const isPast = isBefore(day, currentDate) && !isToday; // Check if the day is in the past but not today

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
                    availabilityStates[dateKey]?.[name] ||
                    data?.getAvailabilities.find((entry) => entry.user === name)?.status ||
                    "normal";

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