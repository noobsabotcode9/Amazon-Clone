// Student.js

import React from 'react';

const Student = ({ name, course, studentId, feeStatus }) => {
  return (
    <div className="studentBox">
      <h3>{name}</h3>
      <p>Course: {course}</p>
      <p>Student ID: {studentId}</p>
      <p>Fee Payment Status: {feeStatus}</p>
    </div>
  );
};

export default Student;
