import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import Error from './pages/Error';
import PatientAppointments from './pages/Patients/Appointment';
import PatientProfile from './pages/Patients/Profile';
import PatientNewAppointment from './pages/Patients/NewApp';
import PatientSignUp from './pages/Patients/SignUp';
import DoctorSignUp from './pages/Doctors/Signup'
import LogIn from './pages/Patients/SignIn';
import DoctorLogIn from './pages/Doctors/SignIn';
import Header from './components/Header';
import Footer from './components/Footer';
import DocProfile from './pages/Patients/Doctors/DocProfile';
import Booking from './pages/Patients/Doctors/Booking';
import DoctorList from './pages/Patients/Doctors/DoctorList';
import CurrentAppointments from './pages/Doctors/CurrentAppointments';
import HistoryAppointments from './pages/Doctors/HistoryAppointments';
import ProfileDoc from './pages/Doctors/ProfileDoc';
import PatProfile from './pages/Doctors/PatProfile';
import Messages from './pages/Admin/Messages';
import UsersList from './pages/Admin/UsersList';
import Response from './pages/Admin/Response';
import PatientsList from './pages/Doctors/PatientsList';
import ContactUs from './pages/Admin/ContactUs';
import './App.css';
function App() {
  return (
   
    <BrowserRouter>
       <div className="app-container">
        <Header />
        <div className="thecontent">


       
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/home" element={<Home />}/>
              <Route path="/patient/appointments" element={<PatientAppointments />}/>
              <Route path="/patient/profile" element={<PatientProfile />}/>
              <Route path="/patient/newapp" element={<PatientNewAppointment />}/>
              <Route path="/patient/docprofile" element={<DocProfile />}/>
              <Route path="/patient/booking" element={<Booking/>}/> 
              <Route path="/patient/signup" element={<PatientSignUp/>}/>
              <Route path="/doctor/signup" element={<DoctorSignUp/>}/>
              <Route path="/login" element={<LogIn />}/>
              <Route path="/doctor/login" element={<DoctorLogIn/>}/>
              <Route path="*" element={<Error />}/>
              <Route path="/patient/doctorlist" element={<DoctorList/>}/>
              <Route path="/doctor/appointments" element={<CurrentAppointments/>}/>
              <Route path="/doctor/historyappointments" element={<HistoryAppointments/>}/>
              <Route path="/doctor/profiledoc" element={<ProfileDoc/>}/>
              <Route path="/doctor/patprofile" element={<PatProfile/>}/>
              <Route path="/admin/messages" element={<Messages/>}/>
              <Route path="/admin/userslist" element={<UsersList/>}/>
              <Route path="/admin/response" element={<Response/>}/>
              <Route path="/doctor/patientslist" element={<PatientsList/>}/>
              <Route path="/admin/contactus" element={<ContactUs/>}/>
            
            </Routes>
         </div>   
        <Footer />
        </div>
      </BrowserRouter>
     
   
  );
}

export default App;
