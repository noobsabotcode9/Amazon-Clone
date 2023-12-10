// ScheduleItem.js
import React from 'react';

const ScheduleItem = ({ checked, profile, date, time, eventName, location }) => (
  <div className="scheduleItem">
    <input type="checkbox" checked={checked} />
    <span>{profile}</span>
    <span>{date}</span>
    <span>{time}</span>
    <span>{eventName}</span>
    <span>{location}</span>
    <button>View</button>
  </div>
);

export default ScheduleItem;
