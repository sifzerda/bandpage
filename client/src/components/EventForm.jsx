// src/components/EventForm.jsx
import React, { useState } from 'react';

const EventForm = ({ slotInfo, addEvent }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title) {
      addEvent({ title, start: slotInfo.start, end: slotInfo.end });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Event Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <button type="submit">Add Event</button>
    </form>
  );
};

export default EventForm;
