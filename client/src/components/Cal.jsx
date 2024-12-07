import React, { useState } from "react";
import { format, startOfMonth, endOfMonth, eachDayOfInterval, addMonths } from "date-fns";
import { useQuery, useMutation } from "@apollo/client";
import { GET_AVAILABILITIES } from "../utils/queries";
import { SET_AVAILABILITY } from "../utils/mutations";

function Cal() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const names = ["Troy", "Megan", "Brad", "Harold", "Jonathan"];
  const [setAvailability] = useMutation(SET_AVAILABILITY);

  const days = eachDayOfInterval({
    start: startOfMonth(selectedDate),
    end: endOfMonth(selectedDate),
  });

  const handleRowClick = (date, user, currentState) => {
    const nextState =
      currentState === "normal" ? "green" : currentState === "green" ? "red" : "normal";

    setAvailability({
      variables: { date: format(date, "yyyy-MM-dd"), user, status: nextState },
    });
  };

  return (
    <div className="calendar">
      <div className="calendar-header">
        <button onClick={() => setSelectedDate((d) => addMonths(d, -1))}>Previous</button>
        <h2>{format(selectedDate, "MMMM yyyy")}</h2>
        <button onClick={() => setSelectedDate((d) => addMonths(d, 1))}>Next</button>
      </div>

      <div className="calendar-grid">
        {days.map((day) => {
          const dateKey = format(day, "yyyy-MM-dd");
          const { data } = useQuery(GET_AVAILABILITIES, { variables: { date: dateKey } });

          return (
            <div key={dateKey} className="calendar-day">
              <div className="date-label">{format(day, "EEE, MMM d")}</div>
              <div className="note-row">
                {names.map((name) => {
                  const userState =
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