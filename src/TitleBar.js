// TitleBar.js

import React, { useState, useEffect } from 'react';
import './TitleBar.css'; // Import the CSS file

const TitleBar = ({ userName, userEmail }) => {
  const [showNotification, setShowNotification] = useState(false);
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const handleClickOutside = (event) => {
      const notificationIcon = document.querySelector('.notificationIcon');
      const notificationDialog = document.querySelector('.notificationDialog');
      if (
        notificationIcon &&
        !notificationIcon.contains(event.target) &&
        notificationDialog &&
        !notificationDialog.contains(event.target)
      ) {
        setShowNotification(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);
  useEffect(() => {
    const updateCurrentDate = () => {
      const date = new Date();
      setCurrentDate(date.toLocaleDateString('en-US', { weekday: 'short', day: 'numeric', month: 'short' }));
    };

    // Initial call to set the current date
    updateCurrentDate();

    // Update the current date every midnight (in milliseconds)
    const intervalId = setInterval(updateCurrentDate, 24 * 60 * 60 * 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const handleNotificationClick = () => {
    setShowNotification(!showNotification);
  };

  // Function to get the current date in the format "ddd, DD MMM"
  
  return (
    <div className="titleBarContainer">
      <div className="titleBar">
      <div className="dateContainer">
          <p className="currentDate">{currentDate}</p>
        </div>
        <div className="logoContainer">
          {/* Your brand logo goes here */}
          <img src="logotr.png" alt="Logo" className="logo" />
          <div className="textContainer">
            <p className="welcomeText">Welcome, {userName}</p>
            <p className="summaryText">Here is a summary of your business</p>
          </div>
        </div>

        {/* Notification bell icon with dialog */}
        <div>
        </div>

        {/* Display the current date */}
        

        <div className="iconContainer">
          {/* Settings icon from Material Icons */}
          <div className="iconBackground">
            <i className="material-icons icon">settings</i>
          </div>
          {/* Notification bell icon */}
          <div className="iconBackground" onClick={handleNotificationClick}>
          <i className="fas fa-bell icon notificationIcon"></i>
          {showNotification && (
            <div className="notificationDialog">
              <p>No new notifications</p>
              <div className="arrow"></div>
            </div>
          )}
          </div>
          {/* Profile picture */}
          <img src="dp.jpg" alt="Profile" className="profilePicture" />
          {/* Name and email */}
          <div className="profileInfo">
            <p className="profileName">{userName}</p>
            <p className="profileEmail">{userEmail}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TitleBar;
