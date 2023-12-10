// PaymentPage.js

import React from 'react';
import './PaymentPage.css';

const PaymentPage = () => {
  // Sample data (replace with actual data)
  const pendingStudents = Array.from({ length: 10 }, (_, index) => ({
    id: index + 1,
    studentId: generateStudentId(),
    firstName: generateRandomName(),
    lastName: generateRandomName(),
  }));


  const handleNotifyClick = (studentId) => {
    // Add logic to handle notification for the selected student
    console.log(`Notify button clicked for student with ID: ${studentId}`);
  };

  function generateStudentId() {
    // Implement your logic to generate a student ID (e.g., use a library)
    return Math.floor(Math.random() * 1000) + 1;
  }

  function generateRandomName() {
    // Implement your logic to generate a random name
    const names = ['John', 'Jane', 'Alice', 'Bob', 'Charlie', 'Emma', 'Daniel', 'Olivia', 'Ethan', 'Sophia'];
    const randomIndex = Math.floor(Math.random() * names.length);
    return names[randomIndex];
  }

  return (
    
    <div className="paymentPage">
        
      <table>
        <thead>
        <tr>
            <th colSpan="4"><h2>Pending Payments</h2></th>
          </tr>
          <tr>
          
            <th>ID</th>
            <th>Student ID</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {pendingStudents.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.studentId}</td>
              <td>{`${student.firstName} ${student.lastName}`}</td>
              <td>
                <button onClick={() => handleNotifyClick(student.studentId)}>Notify</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      
    </div>
  );
};

export default PaymentPage;
