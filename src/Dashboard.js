// Dashboard.js

import React from 'react';
import './Dashboard.css';
import QuickActions from './QuickActions';

import Chart from 'chart.js/auto';

import 'chartjs-plugin-datalabels'; 
import { useState }  from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import Container5 from './container5';

const Dashboard = () => {
  
  const [selectedDuration, setSelectedDuration] = useState('Last 30 days');
  const [selectedDurationContainer3, setSelectedDurationContainer3] = useState('Last 3 Months');

  const handleDurationChange = (duration) => {
    setSelectedDuration(duration);
  };
  const handleDurationChangeContainer3 = (duration) => {
    setSelectedDurationContainer3(duration);
  };
 
  const chartRef = useRef(null);
  const revenueChartRef = useRef(null);
  const studentsChartRef = useRef(null);


  useEffect(() => {
    const createPieChart = () => {
      const ctx = document.getElementById('pieChart');
      if (ctx) {
        // Destroy existing chart
        if (chartRef.current) {
          chartRef.current.destroy();
        }
        let data, labels;
        switch (selectedDuration) {
          case 'Last 30 days':
            data = [624000, 334000];
            labels = [];
            break;
          // Add cases for other durations
          case 'Last 60 days':
            data = [824000, 434000];
            labels = [];
            break;
            case 'Last 90 days':
            data = [1224000, 734000];
            labels = [];
            break;
            case 'Last 365 days':
            data = [2124000, 934000];
            labels = [];
            break;
          default:
            data = [624000, 334000];
            labels = [];
        }
        // Create new chart
        chartRef.current = new Chart(ctx, {
          type: 'doughnut', // Change to 'doughnut' for a donut chart
          data: {
            labels: labels,
            datasets: [
              {
                data: data,
                backgroundColor: ['#364953', '#EE7673'],
              },
            ],
          },
          options: {
            rotation: 180 * Math.PI, // Rotate by 90 degrees (in radians)
            cutout: '30%', // Change the hole size
            plugins: {
              legend: false,
            },
          },
        });
  
        // Update the text in amountReceived and amountPending divs
        const amountReceivedText = document.querySelector('.amountReceived p:last-child');
        const amountPendingText = document.querySelector('.amountPending p:last-child');
  
        if (amountReceivedText && amountPendingText) {
          amountReceivedText.textContent = `${data[0]} Rupees`;
          amountPendingText.textContent = `${data[1]} Rupees`;
        }
      }
    };
  
    createPieChart();
  
    // Cleanup function to destroy the chart when the component unmounts
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, [selectedDuration]);

  useEffect(() => {
    const createRevenueAndStudentsCharts = () => {
      const revenueCtx = document.getElementById('revenueChart');
      const studentsCtx = document.getElementById('studentsChart');
  
      // Your logic to fetch data for revenue and students charts based on selected durations
      let revenueData = [];
      let studentsData = [];
       let labels = [];
      switch (selectedDurationContainer3) {
        case 'Last 3 Months':
          revenueData = [80000, 100000, 150000];
          studentsData = [400, 450, 500];
          labels = ['Jun', 'July', 'Aug'];
          break;
        case 'Last 6 Months':
          revenueData = [60000, 65000, 70000, 80000, 100000, 150000];
          studentsData = [250, 300, 350, 400, 450, 500];
           labels = [ 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug'];
          break;
        case 'Last 9 Months':
          revenueData = [30000, 40000, 50000, 60000, 65000, 70000, 80000, 100000, 150000];
          studentsData = [100, 150, 200, 250, 300, 350, 400, 450, 500];
           labels = ['Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'];
          break;
        default:
          // Default data for the last 3 months
          revenueData = [ 80000, 100000, 150000];
          studentsData = [ 450, 450, 500];
           labels = [  'Jun', 'July', 'Aug'];
      }
  
      // Destroy existing charts
      if (revenueChartRef.current) {
        revenueChartRef.current.destroy();
      }
      if (studentsChartRef.current) {
        studentsChartRef.current.destroy();
      }
  
      // Create new revenue chart
      revenueChartRef.current = new Chart(revenueCtx, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [
            {
              label: 'Fees Received',
              data: revenueData,
              backgroundColor: 'rgba(54, 73, 83, 0.8)', // Customize color
            },
          ],
        },
        options: {
          scales: {
            y: {
              display: false, // Hide y-axis scale
            },
          },
          plugins: {
            legend: {
              display: true,
              position: 'bottom', // Display legend at the bottom
            },
          },
        },
      });
  
      // Create new students chart
      studentsChartRef.current = new Chart(studentsCtx, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [
            {
              label: 'Active Students',
              data: studentsData,
              backgroundColor: 'rgb(110, 115, 129)', // Customize color
            },
          ],
        },
        options: {
          scales: {
            y: {
              display: false, // Hide y-axis scale
            },
          },
          plugins: {
            legend: {
              display: true,
              position: 'bottom', // Display legend at the bottom
            },
          },
        },
      });
    };
  
    createRevenueAndStudentsCharts();
  
    // Cleanup function to destroy the charts when the component unmounts
    return () => {
      if (revenueChartRef.current) {
        revenueChartRef.current.destroy();
      }
      if (studentsChartRef.current) {
        studentsChartRef.current.destroy();
      }
    };
  }, [selectedDurationContainer3]);
  
  
  return (
    <div className="dashboardBody">
      <div className="dashboardWrapper">
        <div className="dashboardLeft">
          <div className="dashboardContainer">
            <div className="leftContent">Active Students</div>
            <div className="rightContent">Active Coaches</div>
          </div>
          <div className="dashboardContainer">
            <div className="leftContent">5,000</div>
            <div className="rightContent">5</div>
          </div>
          <div className="container2">
          <div className="feePaymentSummary">Fee Payment Summary</div>
          <div className="dropdown">
          <label></label>
          <select value={selectedDuration} onChange={(e) => handleDurationChange(e.target.value)}>
            <option value="Last 30 days">Last 30 days</option>
            <option value="Last 60 days">Last 60 days</option>
            <option value="Last 90 days">Last 90 days</option>
            <option value="Last 365 days">Last 365 days</option>
          </select>
        </div>
        {/* Your content for container2 goes here */}
      </div>
      <div className="container4">
  
      <div className="amountReceived">
            <p>Amount Received:</p>
            <p>624,000 Rupees</p>
          </div>
          <canvas id="pieChart" width="380" height="380"></canvas>
          <div className="amountPending">
            <p>Amount Pending:</p>
            <p>334,000 Rupees</p></div>
  
  {/* Content for container4 */}
  {/* ... */}
</div>


        </div>
        <div className="dashboardRight">
          <QuickActions />
          <div className="container3">
        <div className="additionalSummary">Month-On-Month Growth</div>
        
        <div className="dropdown2">
              <label></label>
              <select
                value={selectedDurationContainer3}
                onChange={(e) => handleDurationChangeContainer3(e.target.value)}
              >
                <option value="Last 3 Months">Last 3 Months</option>
<option value="Last 6 Months">Last 6 Months</option>
<option value="Last 9 Months">Last 9 Months</option>

                
              </select>
            </div>
            <div className="downArrowIcon">
              <i className="fas fa-chevron-down"></i>
            </div>
        {/* Additional content for container3 */}
        {/* ... */}
      </div>
      <div className="container6">
      <div className="chartText">Revenue</div>
      <div className="chartContainer">
        
            <canvas id="revenueChart" width="380" height="380"></canvas>
          </div>
      </div>
      <div className="container7">
      <div className="chartText">Students</div>
      <div className="chartContainer">
            <canvas id="studentsChart" width="380" height="380"></canvas>
          </div>
      </div>
      <Container5 />
        </div>
        
      </div>
      
    </div>
  );
};

export default Dashboard;
