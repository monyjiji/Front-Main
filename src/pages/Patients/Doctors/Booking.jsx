import Image from'../../../images/téléchargement.png';
import '../../../css/Booking.css';


import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';



    function Booking() {
        const [date, setDate] = useState(new Date());
      
        const handleDateChange = (newDate) => {
          setDate(newDate);
        };
      
        const handleBookAppointment = () => {
          // Simulate adding appointment to the database
          alert(`Appointment booked for ${date.toDateString()}`);
        };
      
  return (
    <main>
      <div className="containerb">
        <div className="sectionda">
          <div className="profiled">
            <img src={Image} alt="Doctor" />
            <h2>Dr. John Doe</h2>
            <p>Speciality: Cardiologist</p>
            <div className="rating">
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9734;</span>
            </div>
            <p>Points: 1000</p>
          </div>

          <div className="access-infob">
            <h2>Contact Information</h2>
            <p>Phone: +1234567890</p>
            <p>Email: doctor@example.com</p>
            <p>Address: 123 Main Street, City</p>
          </div>
        </div>
        <section className="appointment-section">
          <nav className="navigation-bar">
            <ul>
              <li><a href="doctorspage.html" className="active">book</a></li>
              <li><a href="doctorprfl.html">profile</a></li>
            </ul>
          </nav>
          <div className="part part2">
            <h1>Select Your Date</h1>
            <div className="calendar">
            <Calendar 
              onChange={handleDateChange} 
              value={date} 
            />
            </div>
            <div className="availability">
              <div className="indicator available"></div>
              <span>Available</span>
            </div>
            <div className="availability">
              <div className="indicator not-available"></div>
              <span>Not Available</span>
            </div>
          </div>
          <div className="part part3">
            <button className="book-now-button" onClick={handleBookAppointment}>Book Now</button>
          </div>
        </section>
      </div>
    </main>
  );
}


export default Booking;