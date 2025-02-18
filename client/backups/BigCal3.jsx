import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Modal, Button, Form } from 'react-bootstrap'; // or any other modal library
import moment from 'moment'; // Import moment here

const localizer = momentLocalizer(moment); // Use moment with the localizer

const BigCal = () => {
  const [events, setEvents] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [formData, setFormData] = useState({ title: '', color: '' });
  const participants = ['Troy', 'Megan', 'Brad', 'Harold', 'Jonathan'];
  
  // Color mapping: 'green' -> 'Available', 'red' -> 'Unavailable'
  const colors = [
    { value: 'green', label: 'Available' },
    { value: 'red', label: 'Unavailable' },
  ];

  const handleSelectSlot = ({ start }) => {
    setSelectedDate(start);
    setShowModal(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newEvent = {
      title: formData.title,
      start: selectedDate,
      end: selectedDate,
      color: formData.color,
    };
    setEvents([...events, newEvent]);
    setShowModal(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const eventStyleGetter = (event) => {
    // This function sets the background color of the event based on its color property
    const style = {
      backgroundColor: event.color === 'green' ? '#1cc623' : '#ff655b',  // Hex codes for green and red
      borderColor: event.color === 'green' ? '#28a745' : '#dc3545',      // Border color matches the event's color
      color: '#fff',  // You can change this based on your design
      minHeight: '10px', // Ensure the event has a minimum height
    marginBottom: '0px', // Add some margin between stacked events
    textAlign: 'center', // Center the text
    padding: '0px', // Padding for spacing inside the event

    };
    return { style };
  };

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        selectable={true}
        onSelectSlot={handleSelectSlot}
        eventPropGetter={eventStyleGetter}  // Apply the custom styling to each event
        popup={false}  // Disable event popup, to avoid the "+N more" behavior
        style={{ 
          border: '1px solid black',
          backgroundColor: '#f0f0f0',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
          textAlign: 'center', 
          display: 'flex',            // Enable flexbox layout
          justifyContent: 'center',   // Center the calendar horizontally
          alignItems: 'center',       // Center the calendar vertically
          height: 700, 
          width: 700,
          margin: '20px' }}
      />
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Event</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleFormSubmit}>
            <Form.Group controlId="formTitle">
              <Form.Label>Name</Form.Label>
              <Form.Control as="select" name="title" onChange={handleChange} value={formData.title}>
                <option value="">Select Your Name</option>
                {participants.map((participant) => (
                  <option key={participant} value={participant}>
                    {participant}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formColor">
              <Form.Label>Availability</Form.Label>
              <Form.Control as="select" name="color" onChange={handleChange} value={formData.color}>
                <option value="">Select Availability</option>
                {colors.map(({ value, label }) => (
                  <option key={value} value={value}>
                    {label} {/* Display 'Available' or 'Unavailable' */}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <Button variant="primary" type="submit">
              Add Event
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default BigCal;
