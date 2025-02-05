// this is fullcalendar 


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

  const participants = ['Troy', 'Megan', 'Brad', 'Harold', 'Jonathan'];
  const colors = ['green', 'red'];

  const handleDateClick = (arg) => {
    const newEvent = promptForEventDetails(arg.dateStr);

    if (newEvent) {
      setEvents([...events, newEvent]);
    }
  };

  const promptForEventDetails = (date) => {
    let name = '';
    let color = '';

    // Open the modal with dropdowns for name and color selection
    name = promptForDropdown('Select a participant:', participants);
    if (!name) return null;

    color = promptForDropdown('Select a color (green or red):', colors);
    if (!color) return null;

    return {
      title: name,
      color: color,
      date: date,
    };
  };

  const promptForDropdown = (message, options) => {
    const selectedOption = window.prompt(`${message}\nOptions:\n${options.join('\n')}`);
    if (!options.includes(selectedOption)) {
      alert('Invalid selection. Please choose from the list.');
      return null;
    }
    return selectedOption;
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
