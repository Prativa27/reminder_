// DeleteReminder.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function DeleteReminder() {
   
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedReminder, setSelectedReminder] = useState('');
  const [description, setDescription] = useState(''); // Read-only

  const subjects = ['Meeting', 'Birthday', 'Appointment', 'Other'];
  const reminders = [
    { name: 'Reminder 1', description: 'Description 1...' },
    { name: 'Reminder 2', description: 'Description 2...' },
    // Add more reminders here
  ];

  const handleDeleteReminder = () => {
    // Handle deleting the reminder here
  };

  return (
    <div>
      <h1>Delete Reminder</h1>
      <div>
        <label>Select Date:</label>
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        />
      </div>

      <div>
        <label>Select Subject:</label>
        <select
          value={selectedSubject}
          onChange={(e) => setSelectedSubject(e.target.value)}
        >
          <option value="">Select a Subject</option>
          {subjects.map((s, index) => (
            <option key={index} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label>Reminders:</label>
        <select
          value={selectedReminder}
          onChange={(e) => setSelectedReminder(e.target.value)}
        >
          <option value="">Select a Reminder</option>
          {reminders.map((r, index) => (
            <option key={index} value={r.name}>
              {`${r.name} - ${r.description.slice(0, 30)}`}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label>Description:</label>
        <textarea
          value={description}
          readOnly={true}
        />
      </div>

      <button onClick={handleDeleteReminder}>Delete Reminder</button>
    </div>
  );
}

export default DeleteReminder;
