import React, { useState } from "react";
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

function Cal() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [notes, setNotes] = useState({});

  const names = ['Brad', 'Troy', 'Megan', 'Harold', 'Jonathan'];

  // Function to navigate months
  const changeMonth = (offset) => {
    setSelectedDate((prevDate) => addMonths(prevDate, offset));
  };

  // Generate days for the current month
  const startDate = startOfWeek(startOfMonth(selectedDate));
  const endDate = endOfWeek(endOfMonth(selectedDate));
  const days = eachDayOfInterval({ start: startDate, end: endDate });

  const today = startOfDay(new Date()); // Start of the current day

  // Handle checkbox toggle
  const handleCheckboxChange = (date, name) => {
    const dateKey = format(date, "yyyy-MM-dd");
    setNotes((prev) => ({
      ...prev,
      [dateKey]: {
        ...prev[dateKey],
        [name]: !prev[dateKey]?.[name],
      },
    }));
  };

  return (
    <div className="calendar">
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
          const dayNotes = notes[dateKey] || {};

          return (
            <div
              key={day}
              className={`calendar-day ${
                isPast ? "past-day" : ""
              } ${isCurrentDay ? "current-day" : ""}`}
            >
              <div className="date-label">{format(day, "d")}</div>
              {!isPast && (
                <div className="checkboxes">
                  {names.map((name) => (
                    <label key={name} className="checkbox-label">
                      <input
                        type="checkbox"
                        checked={!!dayNotes[name]}
                        onChange={() => handleCheckboxChange(day, name)}
                      />
                      {name}
                    </label>
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