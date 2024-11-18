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

  // Handle input change for each field
  const handleInputChange = (date, index, value) => {
    const dateKey = format(date, "yyyy-MM-dd");
    setNotes((prev) => ({
      ...prev,
      [dateKey]: {
        ...prev[dateKey],
        [index]: value,
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
                <div className="note-row">
                  {names.map((name, index) => (
                    <div key={name} className="note-field">
                      <span className="note-label">{name}</span>
                      <input
                        type="text"
                        className="note-input"
                        value={dayNotes[index] || ""}
                        onChange={(e) =>
                          handleInputChange(day, index, e.target.value)
                        }
                      />
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