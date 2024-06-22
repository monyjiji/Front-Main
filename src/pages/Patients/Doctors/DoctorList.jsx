import React from 'react';
import { Link } from 'react-router-dom';
import Profilepic from'../../../images/téléchargement.png';
import '../../../css/DoctorsList.css'

function DoctorList() {
  return (
    <main>
      {<div className="filter-bar">
        <div className="filter-options">
          <button className="filter-button">Experience <span>&#9660;</span></button>
          <button className="filter-button">Gender <span>&#9660;</span></button>
          
        </div>
        <div className="filter">
          <span>Filter</span>
          <i className="fa-light fa-filter"></i>
        </div>
      </div> }
      <section className="doctor-list">
      <Link to="/doctorspage" className="doctor-box" >
            <div className="profile-picture">
              <img src={Profilepic} alt="Doctor 1" />
            </div>
            <div className="information">
              <h2>Dr. John Doe</h2>
              <p>Speciality: Cardiologist</p>
              
              <div className="doctordetails">
                <p><i className="fa-solid fa-location-dot"></i> City Hospital</p>
                <p><i className="fa-regular fa-clock"></i> 15 years</p>
                <p><i className="fa-solid fa-house-medical"></i> Mon-Fri, 9AM-5PM</p>
              </div>
            </div>
            </Link>
        
      </section>
      <div className="pagination">
        <button><Link to="#" className="prev-page">Prev</Link></button>
        <button><Link to="#" className="next-page">Next</Link></button>
      </div> 
    </main>
  );
};

export default DoctorList;