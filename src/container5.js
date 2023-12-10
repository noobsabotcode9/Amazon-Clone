// Container5.js

import React, { useState } from 'react';
import './container5.css'; // Import the CSS file
const ScheduleItem = ({ checked, profile, date, time, eventName, location }) => (
  <div className="scheduleItem">
    <input type="checkbox" checked={checked} />
    <button className="profileButton">{profile}</button>
    <span className="date">{date}</span>
    <span className="time">{time}</span>
    <span className="name">{eventName}</span>
    <span className="location">{location}</span>
    <button  className="viewButton">View</button>
  </div>
);

const Container5 = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  }
  const schedules = [
    { checked: false, profile: 'A', date: '2023-12-10', time: '3:00pm to 4:00pm', eventName: 'Beginners Badminton Class   ', location: 'Indoor Stadium' },
    { checked: false, profile: 'B', date: '2023-12-11', time: '6:00pm to 7:30pm', eventName: 'Intermediate Badminton Class', location: 'Indoor Stadium' },
    { checked: false, profile: 'C', date: '2023-12-12', time: '6:00pm to 7:30pm', eventName: 'Staff Meeting of members    ', location: 'Conference Room' },
    { checked: false, profile: 'D', date: '2023-12-13', time: '4:00pm to 5:00pm', eventName: 'Yoga Competition @academy   ', location: 'Academy Garden' },
    // Add more schedules as needed
  ];
  return (
    <div>
    <div className="container5">
       <div className="upcomingSchedule">UPCOMING SCHEDULE</div>
      <div className="filterIcon">
        <i className="fas fa-filter"></i>
      </div>
      <div className="filterOptions">
        {['All', 'Classes', 'Meetings', 'Events'].map((filter) => (
          <div
            key={filter}
            className={`filterOption ${filter === activeFilter ? 'active' : ''}`}
            onClick={() => handleFilterClick(filter)}
          >
            {filter}
          </div>
        ))}
      </div>
      <div className="dotsMenuIcon">
        <i className="fas fa-ellipsis-v"></i>
      </div>
      {/* Your content goes here */}
    </div>
      <div className="container8">
      {schedules.map((schedule, index) => (
          <ScheduleItem key={index} {...schedule} />
        ))}
      </div>
      </div>
  );
};

export default Container5;
