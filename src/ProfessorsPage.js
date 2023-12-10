// ProfessorsPage.js

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import './ProfessorsPage.css'; // Import the CSS file

const ProfessorsPage = () => {
  const professorsData = [
    { name: 'Abdul Ahmed', course: 'Guitar Classes', id: 'P001', isActive: true },
    { name: 'Sam Singh', course: 'Cricket', id: 'P002', isActive: false },
    { name: 'Raj Sharma', course: 'Gymnastics', id: 'P003', isActive: true },
    { name: 'Hrithik Das', course: 'Dance', id: 'P004', isActive: false },
    { name: 'Hima Das', course: 'Football', id: 'P005', isActive: true },
    { name: 'Shyamali Sharma', course: 'Arts', id: 'P006', isActive: false },
    { name: 'Sukanya Nath', course: 'Cricket', id: 'P002', isActive: false },
    { name: 'Kyara Kalita', course: 'Gymnastics', id: 'P003', isActive: true },
    // Add more professors' details as needed
  ];

  return (
    <div className="professorsPageContainer">
      <h1>Professors</h1>
      <div className="professorsGrid">
        {professorsData.map((professor, index) => (
          <div key={index} className="professorBox">
            <p>Name: {professor.name}</p>
            <p>Course: {professor.course}</p>
            <p>ID: {professor.id}</p>
            <p>Status: {professor.isActive ? <FontAwesomeIcon icon={faCheckCircle} color="green" /> : <FontAwesomeIcon icon={faTimesCircle} color="red" />}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfessorsPage;
