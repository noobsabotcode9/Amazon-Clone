import React, { useState } from 'react';
import './QuickActions.css';

const QuickActions = () => {
  const [isAddStudentModalOpen, setAddStudentModalOpen] = useState(false);

  const handleAddStudentClick = () => {
    setAddStudentModalOpen(true);
  };

  const handleCloseModal = () => {
    setAddStudentModalOpen(false);
  };

  const handleSaveStudent = () => {
    // Add logic to save student data
    // You can fetch the data from form inputs and perform the save operation
    // For simplicity, let's just close the modal here
    handleCloseModal();
  };

  return (
    <div className="quickActionsContainer">
      <div className="quickActionsText">Quick Actions</div>
      <div className="actionOptions">
        <div className="actionOption" onClick={handleAddStudentClick}>
          <i className="fas fa-plus"></i> Add new Student
        </div>
        <div className="actionOption">Collect fees</div>
        <div className="actionOption">
          <i className="fas fa-plus"></i> Add new enquiry
        </div>
      </div>

      {/* Add Student Modal */}
      {isAddStudentModalOpen && (
        <div className="modal">
          <div className="modalContent">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <h2>Add New Student</h2>
            <form>
              <label htmlFor="studentName">Student Name:</label>
              <input type="text" id="studentName" name="studentName" />

              <label htmlFor="studentID">Student ID:</label>
              <input type="text" id="studentID" name="studentID" />

              <label htmlFor="courseName">Course Name:</label>
              <input type="text" id="courseName" name="courseName" />

              <label htmlFor="age">Age:</label>
              <input type="text" id="age" name="age" />

              <button type="button" onClick={handleSaveStudent}>Save</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuickActions;
