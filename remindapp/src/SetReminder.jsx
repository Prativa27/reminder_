// SetReminder.js
import React, { useState } from 'react';


function SetReminder() {
    
  const [date, setDate] = useState('');
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');
  const [email, setEmail] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [smsNo, setSmsNo] = useState('');
  const [recurDays, setRecurDays] = useState([]);

  const subjects = ['Meeting', 'Birthday', 'Appointment', 'Other'];

  const handleAddReminder = async () => {
    // Handle adding the reminder here
    let res = await fetch('http://localhost:3000/Add_Reminder',{
        method:"POST",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify({date,subject,description,email,contactNo,smsNo,recurDays}),
    })

    let data = await res.json();
    console.log(data);

  };
 


  return (
    <div>
      <h1>Set Reminder</h1>
      <div>
        <label>Select a Date:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      <div>
        <label>Subject:</label>
        <select
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
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
        <label>Add description:</label>
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

      <button onClick={handleAddReminder}>Add Reminder</button>
  
      
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

export default SetReminder;
