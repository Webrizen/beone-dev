import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@mui/material';

const localizer = momentLocalizer(moment);

const MyCalendar = () => {
  const [events, setEvents] = useState([]);
  const [open, setOpen] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: '',
    start: null,
    end: null,
  });

  const handleEventClick = (event) => {
    console.log('Event clicked:', event);
  };

  const handleDateSelect = ({ start, end }) => {
    setNewEvent({ title: '', start, end });
    setOpen(true);
  };

  const handleInputChange = (e) => {
    setNewEvent({
      ...newEvent,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddEvent = () => {
    setEvents([...events, newEvent]);
    setOpen(false);
  };

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={events}
        views={['month', 'week', 'day']}
        defaultView="month"
        selectable={true}
        onSelectEvent={handleEventClick}
        onSelectSlot={handleDateSelect}
        style={{ height: 500 }}
      />

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Add Event</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            name="title"
            label="Title"
            fullWidth
            value={newEvent.title}
            onChange={handleInputChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={handleAddEvent} disabled={!newEvent.title}>
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default MyCalendar;
