// Schedule.js

import React from 'react';
import './Schedule.css'; // Import the CSS file

const Schedule = () => {
  return (
    <div className="scheduleContainer">
      <h2>Schedule</h2>
      <div className="scheduleOptions">
        <div className="scheduleOption">
          <div className="scheduleBox">
            <i className="material-icons scheduleIcon">meeting_room</i>
            <p>Schedule a Meeting</p>
          </div>
        </div>
        <div className="scheduleOption">
          <div className="scheduleBox">
            <i className="material-icons scheduleIcon">class</i>
            <p>Schedule a Class</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
