import React, { useEffect, useState } from 'react';
import './vitalsA.css'; 


function VitalsSectionA () {
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedOption1, setSelectedOption1] = useState('');
  const [comments, setComments] = useState('');
  // const [height, setHeight] = useState('');
  // const [weight, setWeight] = useState('');
  const [bmiData, setBmiData] = useState({});

  useEffect(()=>{
    setBmiData(JSON.parse(localStorage.getItem('bmiData')))
  },[])

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    setSelectedOption1(event.target.value);
  };

  const handleCommentsChange = (event) => {
    setComments(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
      
    if (bmiData) {
      setBmiData(bmiData);
  
      const payload = {
        height: bmiData.height,
        weight: bmiData.weight,
        bmi: bmiData.bmi,
        comments:comments  
      }

      console.log("PAYLOAD",payload);
      
    }
    else{
      return <div>No BMI data available. Please calculate your BMI first.</div>;
    }

  };

  return (
    <div className="form-container">
      <h2>Vitals SectionA</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="question">General Health?</label>
          <div className="radio-options">
            <label className="radio-option">
              <input
                type="radio"
                value="Good"
                checked={selectedOption === 'Good'}
                onChange={handleOptionChange}
              />
            Good
            </label>
            <label className="radio-option">
              <input
                type="radio"
                value="Poor"
                checked={selectedOption === 'Poor'}
                onChange={handleOptionChange}
              />
              Poor
            </label>
            </div>
            <label className="question">Have you ever been on diet to loose weight?</label>
          <div className="radio-options">
            <label className="radio-option">
              <input
                type="radio"
                value="Yes"
                checked={selectedOption1 === 'Yes'}
                onChange={handleOptionChange}
              />
            Yes
            </label>
            <label className="radio-option">
              <input
                type="radio"
                value="No"
                checked={selectedOption1 === 'No'}
                onChange={handleOptionChange}
              />No
              
            </label>
          </div>
        </div>
        <div className="form-group">
          <label className="question">Comments:</label>
          <textarea
            className="comments"
            value={comments}
            onChange={handleCommentsChange}
            placeholder="Enter your comments here..."
          ></textarea>
        </div>
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default VitalsSectionA;
