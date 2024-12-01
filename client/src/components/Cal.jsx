import { io } from "socket.io-client";
import React, { useState, useEffect } from "react";
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

const socket = io("http://localhost:3001"); // Adjust to match your server's URL and port

// Function to add suffix to date number (e.g., 1st, 2nd, 3rd, etc.)
const getDayWithSuffix = (day) => {
  const dayOfMonth = format(day, "d");
  const lastDigit = dayOfMonth % 10;

  if (dayOfMonth >= 11 && dayOfMonth <= 13) {
    return `${dayOfMonth}th`;
  }

  switch (lastDigit) {
    case 1:
      return `${dayOfMonth}st`;
    case 2:
      return `${dayOfMonth}nd`;
    case 3:
      return `${dayOfMonth}rd`;
    default:
      return `${dayOfMonth}th`;
  }
};

function Cal() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [rowStates, setRowStates] = useState({}); // State to track row colors
  const names = ["Troy", "Megan", "Brad", "Harold", "Jonathan"];

  // Function to navigate months
  const changeMonth = (offset) => {
    setSelectedDate((prevDate) => addMonths(prevDate, offset));
  };

  // Generate days for the current month
  const startDate = startOfWeek(startOfMonth(selectedDate));
  const endDate = endOfWeek(endOfMonth(selectedDate));
  const days = eachDayOfInterval({ start: startDate, end: endDate });

  const today = startOfDay(new Date());

  // Handle row click to toggle colors and emit changes via WebSocket
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

      socket.emit("update-state", updatedState); // Emit the updated state to the server
      return updatedState;
    });
  };

  // Save the current rowStates to the server (replacing local storage)
  const saveState = () => {
    socket.emit("update-state", rowStates); // Sync with server
    alert("Calendar saved!"); // Simple browser alert
  };

  // Load the initial state from the server
  useEffect(() => {
    socket.on("load-state", (savedState) => {
      if (savedState) {
        setRowStates(savedState);
      }
    });

    // Update local state whenever the server broadcasts a state update
    socket.on("state-updated", (updatedState) => {
      setRowStates(updatedState);
    });

    return () => {
      socket.off("load-state");
      socket.off("state-updated");
    };
  }, []);

  return (
    <div className="calendar">
      {/* Save Button */}
      <button onClick={saveState} className="save-button">
        Save
      </button>

      {/* Month Navigation */}
      <div className="calendar-header">
        <button onClick={() => changeMonth(-1)}>Previous</button>
        <h2>{format(selectedDate, "MMMM yyyy")}</h2>
        <button onClick={() => changeMonth(1)}>Next</button>
      </div>

      {/* Calendar Grid */}
      <div className="calendar-grid">
        {days.map((day) => {
          const isPast = isBefore(startOfDay(day), today);
          const isCurrentDay = isToday(day);
          const dateKey = format(day, "yyyy-MM-dd");
          const dayState = rowStates[dateKey] || {};
          const dayName = format(day, "EEE");

          return (
            <div
              key={day}
              className={`calendar-day ${isPast ? "past-day" : ""} ${
                isCurrentDay ? "current-day" : ""
              }`}
            >
              <div className="date-label">
                <span className="day-name">{dayName}</span> {getDayWithSuffix(day)}
              </div>
              {!isPast && (
                <div className="note-row">
                  {names.map((name, index) => (
                    <div
                      key={name}
                      className={`note-row-item ${dayState[index] || "normal"}`}
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
