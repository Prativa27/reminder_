// Home.js
import React from 'react';
import { Route,Routes } from 'react-router-dom';

import SetReminder from '../SetReminder';
import ModifyReminder from './ModifyReminder';
import DisableReminder from './DisableReminder';
import DeleteReminder from './DeleteReminder'
import EnableReminder from './EnableReminder/'
import ViewReminder from './ViewReminder';
function Home({ username }) {

  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  
  return (
    <div className='div'>
      <h1>Welcome to Reminder Apllication</h1>
      <h1>Welcome, {username}</h1>
      <p>{formattedDate}</p>
      <div>
        <button> <a href="/setreminder">SetReminder</a></button>
        <button ><a href="/modifyreminder">ModifyReminder</a></button>
        <button><a href="/disablereminder"> DisableReminder</a></button>
        <button><a href="/enablereminder">EnableReminder</a></button>
        <button><a href="/deletereminder">DeleteReminder</a></button>
        <button><a href="/viewreminder">ViewReminder</a></button>

        
      </div>
    </div>
  );
}

export default Home;
