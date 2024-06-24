import './App.css';
 import Registration from './Components/Registration';
import { Routes,
 Route,
} from 'react-router';
 import Visitspage from './Components/Visitspage';
 import VitalsSectionA from './Components/VitalsSectionA';
 import VitalsSectionB from './Components/VitalsSectionB';
 import PatientList from './Components/PatientList';
// import { Navigate } from 'react-router-dom';

function App() {
  return (
    
    <div className="App">

       <Routes>

  
          <Route path='/' element ={<Registration />}></Route> 
          <Route path='/visit' element ={<Visitspage />}></Route> 
        <Route path='/belowbmi' element ={<VitalsSectionA />}></Route> 
        <Route path='/abovebmi' element ={<VitalsSectionB />}></Route>
        <Route path='/patientlist' element ={<PatientList />}></Route> 
         {/* <Route exact path='Registration'element={<RegistrationForm/>}></Route> */}

         </Routes>
         </div>
   
  );
}

export default App;
