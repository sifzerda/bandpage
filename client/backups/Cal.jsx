import React, { useState } from "react";
import {
  format,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  startOfWeek,
  endOfWeek,
  addDays,
  addMonths,
  subMonths,
} from "date-fns";

function Cal() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [notes, setNotes] = useState({});

  // Function to navigate months
  const changeMonth = (offset) => {
    setSelectedDate((prevDate) => addMonths(prevDate, offset));
  };

  // Generate days for the current month
  const startDate = startOfWeek(startOfMonth(selectedDate));
  const endDate = endOfWeek(endOfMonth(selectedDate));
  const days = eachDayOfInterval({ start: startDate, end: endDate });

  // Handle input change
  const handleInputChange = (date, value) => {
    setNotes((prev) => ({
      ...prev,
      [format(date, "yyyy-MM-dd")]: value,
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
        {days.map((day) => (
          <div key={day} className="calendar-day">
            <div className="date-label">{format(day, "d")}</div>
            <textarea
              className="note-input"
              placeholder="Add a note..."
              value={notes[format(day, "yyyy-MM-dd")] || ""}
              onChange={(e) => handleInputChange(day, e.target.value)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cal;