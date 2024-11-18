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

// Function to add suffix to date number (e.g., 1st, 2nd, 3rd, 4th, 15th, etc.)
const getDayWithSuffix = (day) => {
  const dayOfMonth = format(day, "d"); // Get day of the month (e.g., 1, 2, 3...)
  const lastDigit = dayOfMonth % 10;

  if (dayOfMonth >= 11 && dayOfMonth <= 13) {
    // Special case for 11th, 12th, 13th
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

  const today = startOfDay(new Date()); // Start of the current day

  // Handle row click to toggle colors
  const handleRowClick = (date, index) => {
    const dateKey = format(date, "yyyy-MM-dd");
    setRowStates((prev) => {
      const dayState = prev[dateKey] || {};
      const currentState = dayState[index] || "normal";

      const nextState =
        currentState === "normal" ? "green" : currentState === "green" ? "red" : "normal";

      return {
        ...prev,
        [dateKey]: {
          ...dayState,
          [index]: nextState,
        },
      };
    });
  };

  // Save the current rowStates to localStorage
  const saveState = () => {
    localStorage.setItem("calendarState", JSON.stringify(rowStates));
    alert("Calendar saved!"); // Simple browser alert
  };

  // Load the saved state from localStorage
  const loadState = () => {
    const savedState = localStorage.getItem("calendarState");
    if (savedState) {
      setRowStates(JSON.parse(savedState));
    }
  };

  // Load saved state when component mounts
  useEffect(() => {
    loadState();
  }, []);

  return (
    <div className="calendar">

      {/* Save Button */}
      <button onClick={saveState} className="save-button">
        Save This
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
          const dayName = format(day, "EEE"); // Abbreviated day name (e.g., Mon, Tue, Wed)

          return (
            <div
              key={day}
              className={`calendar-day ${isPast ? "past-day" : ""} ${
                isCurrentDay ? "current-day" : ""
              }`}
            >
              <div className="date-label">
                <span className="day-name">{dayName}</span>{" "}
                {getDayWithSuffix(day)}
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