// import {useEffect, useState} from 'react';
import './style.css';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import { useState} from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from 'react-router-dom';




function Registration(){
     const baseUrl="http://127.0.0.1:8089/patient/";

    const navigate = useNavigate();

   
    const [selectedDate, setSelectedDate] = useState(null);
 
    const handleDateChange = (dob) => {
      setSelectedDate(dob);
    };


    const [selectedValue, setSelectedValue] = useState('');
    const[firstName,setFirstName]=useState(null) 
    const[lastName,setLastname]=useState(null)
    const[gender,setGender]=useState(null)
    const[dob,setDob]=useState(null)

      const handleChange = (event) => {
        setSelectedValue(event.target.value);

        const {id , value} = event.target;
        if(id==="firstName"){
          setFirstName(value);
        }
        if(id==="lastName"){
          setLastname(value);

        }
         if(id==="selectedValue"){
          setGender(value);
        }
         if(id==="selectedDate}"){
         setDob(value);
       }
    
     
      };
 
        const handleSubmit = (event) => {

          event.preventDefault();

  
          const payload = {
            firstName: firstName,
            lastName: lastName,
            dob: dob,
            gender:gender

          }
          console.log(payload);
        
          // setLoading(true);  
    
          // Make the POST request
           axios.post(baseUrl+"register",(payload))
          
      
          // axios.post(baseUrl+"create",{payload})
          
            .then(response => {
       
              // let data=response.data;
              
     //response.status,response.statusText,resp
              // Handle success response
              // const showToastMessage = () => {
                // toast.success(response.data.message, {
                //   position: toast.POSITION.TOP_RIGHT,
                // });
              // };
              console.log(response.data.message);
              navigate('/visit');
    
              // setLoading(false);
            })
         
            .catch((error) => {
              // setLoading(false);
              // Handle error
              console.error(error);
            });
        };

      // })
    
     

    return(
      // <div className="container">
      // <div className="row justify-content-center">
 
      <div className="form">
      <form onSubmit={handleSubmit}>
            <div className='header'>
              <h2>Registration Page</h2>  
            </div>
          
            <div className='form-body'>
                <div className='firstName'>
                <label className="form__label" for="firstName">FirstName: </label>
                  <input  type="text" name="" id="firstName" className="form__input" value={firstName} onChange={handleChange} required placeholder="First Name"/>
                </div>
                <div className="lastname">
                  <label className="form__label" for="lastName">LastName: </label>
                  <input  type="text" name="" id="lastName" className="form__input" value={lastName} onChange={handleChange} required placeholder="LastName"/>
              </div>
               
              <div className='Gender'>
              <label className="form__label" for="Gender">Gender: </label>
              {/* <input type="text"  id="input_text"className="text"   placeholder="Gender"/> */}
              <select id="gender" value={selectedValue} onChange={handleChange}>
                  <option value="Female">Female</option>
                  <option value="Male">Male</option>
                  <option value="Transgender">Transgender</option>
                </select>   
              </div>
         <label htmlFor="date">Date:</label>
        <DatePicker
          id="dob"
          selected={selectedDate}
          onChange={handleDateChange}
        />

            </div>
            <div class="footer">
              < button type="submit"   class="btn  btn-primary">Save</button>
          </div>
          <p text left><a href='Display'>views</a></p>
        </form>
        </div>


    )
}
export default Registration;
