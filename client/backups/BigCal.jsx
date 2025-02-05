import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar'; // Import momentLocalizer
import moment from 'moment'; // Import moment
import 'react-big-calendar/lib/css/react-big-calendar.css';

const BigCal = () => {
  // Initial state for events
  const [events, setEvents] = useState([
    {
      title: 'Event 1',
      start: new Date(2025, 1, 6, 10, 0),
      end: new Date(2025, 1, 6, 12, 0),
    },
    {
      title: 'Event 2',
      start: new Date(2025, 1, 10, 13, 0),
      end: new Date(2025, 1, 10, 15, 0),
    },
  ]);

  // Localizer setup using moment
  const localizer = momentLocalizer(moment);

  const handleSelectEvent = (event) => {
    alert(`You clicked on event: ${event.title}`);
  };

  const handleSelectSlot = (slotInfo) => {
    const newEvent = {
      title: window.prompt('Enter event title'),
      start: slotInfo.start,
      end: slotInfo.end,
    };
    setEvents([...events, newEvent]);
  };

  return (
    <div style={{ height: '100vh' }}>
      <Calendar
        localizer={localizer} // Use momentLocalizer
        events={events}
        startAccessor="start"
        endAccessor="end"
        onSelectEvent={handleSelectEvent}
        onSelectSlot={handleSelectSlot}
        selectable
        eventPropGetter={(event) => ({
          style: {
            backgroundColor: 'lightblue', // Custom event color
          },
        })}
        style={{ height: '100%' }}
      />
    </div>
  );
};

export default BigCal;
