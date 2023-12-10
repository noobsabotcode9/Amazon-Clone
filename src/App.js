// App.js or DashboardPage.js

import React, { useState } from 'react';
import TitleBar from './TitleBar';
import MainMenu from './MainMenu';
import Dashboard from './Dashboard';
import StudentsPage from './StudentsPage';
import AcademyManagementPage from './AcademyManagementPage';
import PaymentPage from './PaymentPage';
import Enquiries from './EnquiriesPage';
import ProfessorsPage from './ProfessorsPage';
import Schedule from './Schedule';
const App = () => {
  const userName = 'Your Name'; // Replace with actual user name
  const userEmail = 'your@email.com'; // Replace with actual user email
  const [selectedMenu, setSelectedMenu] = useState('Dashboard');

  const handleMenuSelect = (option) => {
    setSelectedMenu(option);
  };

  return (
    <div>
      <TitleBar userName={userName} userEmail={userEmail} />
      <div style={{ display: 'flex' }}>
        <MainMenu onSelectMenu={handleMenuSelect} >
          <div style={{ marginLeft: '200px', padding: '20px' }}></div>
        </MainMenu>
        <div style={{ padding: '20px' }}>
          {(selectedMenu === 'Students') ? <StudentsPage /> : null}
          {(selectedMenu === 'Academy Management') ? <AcademyManagementPage /> : null}
          {(selectedMenu === 'Dashboard' || selectedMenu === '') ? <Dashboard /> : null}
          {(selectedMenu === 'Fee Payment') ? <PaymentPage /> : null}
          {(selectedMenu === 'Enquiries') ? <Enquiries /> : null}
          {(selectedMenu === 'Professors') ? <ProfessorsPage/> : null}
          {(selectedMenu === 'Schedule') ? <Schedule /> : null}
        </div>
      </div>
    </div>
  );
};

export default App;
