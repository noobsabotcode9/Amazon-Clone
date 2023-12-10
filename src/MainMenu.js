// MainMenu.js

import React, { useState, useEffect } from 'react';
import './MainMenu.css'; // Import the CSS file

const MainMenu = ({ onSelectMenu }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleMenuClick = (option) => {
    setSelectedOption(option);
    onSelectMenu(option);
  };
  useEffect(() => {
    // Set the initial selected option to 'Dashboard' only if not already set
    if (!selectedOption) {
      setSelectedOption('Dashboard');
      onSelectMenu('Dashboard');
    }
  }, [selectedOption, onSelectMenu]);
  

  return (
    <div className="mainMenu">
      <div className="menuTitle">Main Menu</div>
      <ul className="menuList">
        <li
          className={`menuItem ${selectedOption === 'Dashboard' ? 'selected' : ''}`}
          onClick={() => handleMenuClick('Dashboard')}
        >
          <i className="material-icons menuIcon">dashboard</i> Dashboard
        </li>
        <li
          className={`menuItem ${selectedOption === 'Academy Management' ? 'selected' : ''}`}
          onClick={() => handleMenuClick('Academy Management')}
        >
          <i className="material-icons menuIcon">school</i> Academy Management
        </li>
        {/* Add more spacing between items */}
        <div style={{ marginBottom: '40px' }}></div>
        <div className="menuTitle">More</div>
        
        {/* Search bar under "More" section */}
        <div>
          <li className="searchItem">
            <i className="material-icons searchIcon">search</i>
            <input 
              type="text"
              placeholder="Search students by name"
              className="searchInput"
            />
          </li>
        </div>

        {/* Add additional options */}
        <li
          className={`menuItem ${selectedOption === 'Students' ? 'selected' : ''}`}
          onClick={() => handleMenuClick('Students')}
        >
          <i className="material-icons menuIcon">people</i> Students
        </li>
        <li
          className={`menuItem ${selectedOption === 'Fee Payment' ? 'selected' : ''}`}
          onClick={() => handleMenuClick('Fee Payment')}
        >
          <i className="material-icons menuIcon">payment</i> Fee Payment
        </li>
        <li
          className={`menuItem ${selectedOption === 'Enquiries' ? 'selected' : ''}`}
          onClick={() => handleMenuClick('Enquiries')}
        >
          <i className="material-icons menuIcon">email</i> Enquiries
        </li>
        <li
          className={`menuItem ${selectedOption === 'Professors' ? 'selected' : ''}`}
          onClick={() => handleMenuClick('Professors')}
        >
          <i className="material-icons menuIcon">people_alt</i> Professors
        </li>
        <li
          className={`menuItem ${selectedOption === 'Schedule' ? 'selected' : ''}`}
          onClick={() => handleMenuClick('Schedule')}
        >
          <i className="material-icons menuIcon">schedule</i> Schedule
        </li>
      </ul>
    </div>
  );
};

export default MainMenu;
