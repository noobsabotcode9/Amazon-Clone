// StudentsPage.js

import React from 'react';
import Student from './Student';
import './StudentsPage.css'; // Import the CSS file for styling

const StudentsPage = () => {
  // Sample student data (replace with your actual data)
  const students = [
    { name: 'Rohan Sharma', course: 'Cricket', studentId: 'CS001', feeStatus: 'Paid' },
    { name: 'Ishan Dutta', course: 'Cricket', studentId: 'MA002', feeStatus: 'Pending' },
    { name: 'Rahul Kumar', course: 'Arts', studentId: 'PH003', feeStatus: 'Paid' },
    { name: 'Kabir Singh', course: 'Guitar', studentId: 'BI004', feeStatus: 'Pending' },
    { name: 'Aryan Khan', course: 'Gymnastic', studentId: 'CH005', feeStatus: 'Paid' },
    { name: 'Manish Kalita', course: 'Dance', studentId: 'HI006', feeStatus: 'Pending' },
  ];

  return (
    <div className="studentsPageContainer">
      <h1>Students</h1>
      <p>This page displays student details.</p>

      
      <div className="studentsContainer">
        {students.map((student, index) => (
          <Student key={index} {...student} />
        ))}
      </div>
    </div>
  );
};

export default StudentsPage;
