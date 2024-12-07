// + row clicks save to db, graph, server
// + row clicks update local state
// + row clicks update server state
// + row clicks update db state
// + row clicks update graph state
// + does not use calendar package (no react-calendar)

import React, { useState, useEffect } from "react";
import {
  format,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  addMonths
} from "date-fns";
import { useQuery, useMutation } from "@apollo/client";
import { GET_AVAILABILITIES } from "../utils/queries";
import { SET_AVAILABILITY } from "../utils/mutations";

function Cal() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [availabilityStates, setAvailabilityStates] = useState({});
  const names = ["Troy", "Megan", "Brad", "Harold", "Jonathan"];
  const [setAvailability] = useMutation(SET_AVAILABILITY, {
    refetchQueries: [GET_AVAILABILITIES], // Refetch to get updated availability from the server after mutation
  });

  const days = eachDayOfInterval({
    start: startOfMonth(selectedDate),
    end: endOfMonth(selectedDate),
  });

  // Handle row click to toggle status locally
  const handleRowClick = (date, user, currentState) => {
    const nextState =
      currentState === "normal" ? "green" : currentState === "green" ? "red" : "normal";

    // Update the local state for the clicked user on that date
    setAvailabilityStates((prevState) => ({
      ...prevState,
      [format(date, "yyyy-MM-dd")]: {
        ...prevState[format(date, "yyyy-MM-dd")],
        [user]: nextState,
      },
    }));

    // Save the new availability state to the server
    setAvailability({
      variables: {
        date: format(date, "yyyy-MM-dd"),
        user,
        status: nextState
      },
    });
  };

  return (
    <div className="calendar">
      {/* Calendar Header with Navigation */}
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

          return (
            <div key={dateKey} className="calendar-day">
              <div className="date-label">{format(day, "EEE, MMM d")}</div>
              <div className="note-row">
                {names.map((name) => {
                  // Use the local state first, if available, or fallback to the server data
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