import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './bmistyles.css'; // Import your CSS file for styling

const Visitspage = () => {
  const [formData, setFormData] = useState({
    date: '',
    height: '',
    weight: '',
    bmi: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const calculateBMI = () => {
    const heightInMeters = formData.height / 100; // Convert height to meters
    const weight = parseFloat(formData.weight);
    if (heightInMeters > 0 && weight > 0) {
      const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setFormData(prevState => ({
        ...prevState,
        bmi: bmi
      }));
      if (bmi > 25) {
        const dataToSave = { ...formData, bmi,weight,heightInMeters};
        localStorage.setItem('bmiData', JSON.stringify(dataToSave));
        
        
        console.log('Your BMI is 25 or more, which is considered overweight.');
        navigate('/abovebmi');
      } 
      if (bmi <= 25) {
        const dataToSave = { ...formData, bmi,weight,heightInMeters};
        localStorage.setItem('bmiData', JSON.stringify(dataToSave));
        
        
        console.log('Your BMI is 25 below, which is considered below.');
        navigate('/belowbmi');
      }
      else {
        console.log('');
      }

    } else {
      // Handle invalid input scenario
      setFormData(prevState => ({
        ...prevState,
        bmi: ''
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateBMI();
  };

  return (
    <div className="container">
      <h2>BMI Calculator</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Date:</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Height (cm):</label>
          <input
            type="number"
            name="height"
            value={formData.height}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Weight (kg):</label>
          <input
            type="number"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>BMI:</label>
          <input
            type="number"
            name="bmi"
            value={formData.bmi}
            onChange={handleChange}
            disabled // BMI is calculated and displayed, so it's disabled for input
          />
        </div>
        <button className="submit" type="submit">Calculate BMI</button>
      </form>
      {formData.bmi && (
        <div className="result">
          <h3>Result:</h3>
          <p>Date: {formData.date}</p>
          <p>BMI: {formData.bmi}</p>
        </div>
      )}
    </div>
  );
};

export default Visitspage;
