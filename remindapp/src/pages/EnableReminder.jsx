// EnableReminder.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function EnableReminder() {
   
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedReminder, setSelectedReminder] = useState('');
  const [description, setDescription] = useState('');
  const [email, setEmail] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [smsNo, setSmsNo] = useState('');
  const [recurDays, setRecurDays] = useState([]);

  const subjects = ['Meeting', 'Birthday', 'Appointment', 'Other'];
  const reminders = [
    { name: 'Reminder 1', description: 'Description 1...' },
    { name: 'Reminder 2', description: 'Description 2...' },
    // Add more reminders here
  ];

  const handleEnableReminder = () => {
    // Handle enabling the reminder here
  };

  return (
    <div>
      <h1>Enable Reminder</h1>
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
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div>
        <label>Email Address:</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div>
        <label>Contact No:</label>
        <input
          type="text"
          value={contactNo}
          onChange={(e) => setContactNo(e.target.value)}
        />
      </div>

      <div>
        <label>SMS No:</label>
        <input
          type="text"
          value={smsNo}
          onChange={(e) => setSmsNo(e.target.value)}
        />
      </div>

      <div>
        <label>Recur for next:</label>
        <label>
          <input
            type="checkbox"
            value="7 Days"
            checked={recurDays.includes('7 Days')}
            onChange={() => toggleRecurDay('7 Days')}
          />
          7 Days
        </label>
        <label>
          <input
            type="checkbox"
            value="5 Days"
            checked={recurDays.includes('5 Days')}
            onChange={() => toggleRecurDay('5 Days')}
          />
          5 Days
        </label>
        <label>
          <input
            type="checkbox"
            value="3 Days"
            checked={recurDays.includes('3 Days')}
            onChange={() => toggleRecurDay('3 Days')}
          />
          3 Days
        </label>
        <label>
          <input
            type="checkbox"
            value="2 Days"
            checked={recurDays.includes('2 Days')}
            onChange={() => toggleRecurDay('2 Days')}
          />
          2 Days
        </label>
      </div>

      <button onClick={handleEnableReminder}>Enable Reminder</button>
    </div>
  );

  function toggleRecurDay(day) {
    if (recurDays.includes(day)) {
      setRecurDays(recurDays.filter((d) => d !== day));
    } else {
      setRecurDays([...recurDays, day]);
    }
  }
}

export default EnableReminder;
