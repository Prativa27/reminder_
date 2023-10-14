// ViewReminder.js
import React, { useState } from 'react';
import{useNavigate} from 'react-router-dom';
function ViewReminder() {
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedReminder, setSelectedReminder] = useState('');
  const [reminders] = useState([
    // Replace with your actual reminders data
    {
      name: 'Reminder 1',
      subject: 'Meeting',
      description: 'Description 1...',
      email: 'user@example.com',
      contactNo: '123-456-7890',
      smsNo: '987-654-3210',
      status: 'Active',
      recurrence: ['7 Days', '5 Days'],
    },
    {
      name: 'Reminder 2',
      subject: 'Birthday',
      description: 'Description 2...',
      email: 'user2@example.com',
      contactNo: '123-456-7890',
      smsNo: '987-654-3210',
      status: 'Disabled',
      recurrence: ['3 Days', '2 Days'],
    },
    // Add more reminders here
  ]);

  const subjects = ['Meeting', 'Birthday', 'Appointment', 'Other'];
 
  return (
    <div>
      <h1>View Reminder</h1>
      <div>
        <label>Select From Date:</label>
        <input
          type="date"
          value={fromDate}
          onChange={(e) => setFromDate(e.target.value)}
        />
      </div>

      <div>
        <label>Select To Date:</label>
        <input
          type="date"
          value={toDate}
          onChange={(e) => setToDate(e.target.value)}
        />
      </div>

      <div>
        <label>Subject:</label>
        <select
          value={selectedSubject}
          onChange={(e) => setSelectedSubject(e.target.value)}
        >
          <option value="">All Subjects</option>
          {subjects.map((s, index) => (
            <option key={index} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <table>
        <thead>
          <tr>
            <th>Reminder Name</th>
            <th>Reminder Subject</th>
            <th>Reminder Description</th>
            <th>Email Address</th>
            <th>Contact No</th>
            <th>SMS No</th>
            <th>Status</th>
            <th>Recurrence Frequency</th>
          </tr>
        </thead>
        <tbody>
          {reminders.map((reminder, index) => (
            <tr key={index}>
              <td>{reminder.name}</td>
              <td>{reminder.subject}</td>
              <td>{reminder.description}</td>
              <td>{reminder.email}</td>
              <td>{reminder.contactNo}</td>
              <td>{reminder.smsNo}</td>
              <td>{reminder.status}</td>
              <td>{reminder.recurrence.join(', ')}</td>
              {/* Add an option to select the reminder for further operations */}
              <td>
                <input
                  type="checkbox"
                  value={reminder.name}
                  onChange={() => handleSelectReminder(reminder.name)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table><button>View</button>
    </div>
  );

  function handleSelectReminder(selectedName) {
    // Handle selection of a reminder for further operations
  }
}

export default ViewReminder;
