// DisableReminder.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function DisableReminder() {
    
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedReminder, setSelectedReminder] = useState('');
  const [description, setDescription] = useState(''); // Read-only
  const [email, setEmail] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [smsNo, setSmsNo] = useState('');
  const [allData,setAlldata] = useState('')

  const subjects = ['Meeting', 'Birthday', 'Appointment', 'Other'];
  const reminders = [
    { name: 'Reminder 1', description: 'Description 1...' },
    { name: 'Reminder 2', description: 'Description 2...' },
    // Add more reminders here
  ];

  const handleDisableReminder =async () => {
    // Handle disabling the reminder here
    let data = await fetch ('http://localhost:3000/Disable_Reminder',{
      method:"DELETE",
      headers:{
        "Content-Type": "application/json",
      },
      body:JSON.stringify({selectedDate,selectedSubject,selectedReminder,description,email,contactNo,smsNo,allData})
    })
    let res = await data.json();
    setAlldata(res);
    console.log(allData);



  };

  return (
    <div>
      <h1>Disable Reminder</h1>
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

      <button onClick={handleDisableReminder}>Disable Reminder</button>
    </div>
  );
}

export default DisableReminder;
