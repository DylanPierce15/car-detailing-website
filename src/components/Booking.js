import React from 'react';
import './Booking.css';

function Booking() {

  return (
    <section id="booking" className="booking-section">
      <h1 className="booking-title">Book Your Appointment</h1>
      <hr className="bookings-line" />
        <div className="form-frame">
          <iframe
            title="Booking Form"
            src="https://docs.google.com/forms/d/e/1FAIpQLSeF-2z9yKNsRRzrmaCswFOO7JSJ8MmsLXv73isUubETwH1Hkg/viewform?embedded=true"
            width="100%"
            height="1200"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
          >
            Loading…
          </iframe>
        </div>
    </section>
  );
}

export default Booking;
