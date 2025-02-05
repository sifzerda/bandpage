import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

const BigCal = () => {
  const [events, setEvents] = useState([
    { title: 'Troy', color: 'green', date: '2025-02-10' },
    { title: 'Megan', color: 'red', date: '2025-02-13' },
    { title: 'Brad', color: 'red', date: '2025-02-12' },
    { title: 'Harold', color: 'green', date: '2025-02-19' },
    { title: 'Jonathan', color: 'green', date: '2025-02-21' },
  ]);

  const handleDateClick = (arg) => {
    const newEvent = {
      title: prompt('Enter event title:'),
      date: arg.dateStr,
    };

    if (newEvent.title) {
      setEvents([...events, newEvent]);
    }
  };

  const handleEventClick = (clickInfo) => {
    if (window.confirm(`Are you sure you want to delete the event: "${clickInfo.event.title}"?`)) {
      clickInfo.event.remove();
    }
  };

  return (
    <div>
      <div className="calendar-container">
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          events={events}
          dateClick={handleDateClick}
          eventClick={handleEventClick}
          editable={true}
          droppable={true}
        />
      </div>
    </div>
  );
};

export default BigCal;
