import React, { useState, useEffect } from 'react';
import './patientlist.css'; // Assuming you have a CSS file for styling

const PatientList = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8089/getPatients/') // Replace with your actual API endpoint
      .then(response => response.json())
      .then(data => setPatients(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleReportClick = () => {
    // Handle report button click action here
    console.log('Generate report...');
  };

  return (
    <div className="patient-list-container">
      <button className="report-button" onClick={handleReportClick}>Generate Patient Report</button>
      <table className="patient-table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Age</th>
            <th>BMI</th>
          </tr>
        </thead>
        <tbody>
          {patients.map(patient => (
            <tr key={patient.id}>
              <td>{patient.firstName}</td>
              <td>{patient.age}</td>
              <td>{patient.bmi}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PatientList;
