import React, { useEffect, useState } from 'react';
import './Booking.css';

function Bookings() {
  const [availableSlots, setAvailableSlots] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    make: '',
    model: '',
    date: '',
    time: '',
    comments: ''
  });

  useEffect(() => {
    // Fetch available slots from Google Apps Script web app
    fetch('https://script.google.com/macros/AKfycbyQfYL-1PCydY7t-u6r6bU2CQithkmie0fPKzZq7uIV7DHgGl8rqzwG8ialxuxe3iSy/exec') // Replace with your script URL
      .then(res => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then(data => setAvailableSlots(data))
      .catch(err => console.error('Error fetching slots:', err));
  }, []);

  // Group available slots by Date for dropdown
  const groupedByDate = availableSlots.reduce((acc, slot) => {
    if (!acc[slot.Date]) acc[slot.Date] = [];
    acc[slot.Date].push(slot.Time);
    return acc;
  }, {});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (name === 'date') {
      setSelectedDate(value);
      setFormData(prev => ({ ...prev, time: '' })); // Reset time when date changes
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert("Thank you for booking! We'll be in touch.");
    // TODO: Send formData to your backend or Google Form here
  };

  return (
    <section className="booking-section">
      <h2 className="booking-title">Book Your Detailing</h2>
      <form className="booking-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            name="phone"
            type="tel"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
          >
            <option value="">Select Service</option>
            <option value="Interior Detail">Interior Detail</option>
            <option value="Exterior Detail">Exterior Detail</option>
            <option value="Full Detail">Full Detail</option>
          </select>
        </div>

        <div className="form-group">
          <input
            name="make"
            placeholder="Car Make"
            value={formData.make}
            onChange={handleChange}
            required
          />
          <input
            name="model"
            placeholder="Car Model"
            value={formData.model}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <select
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          >
            <option value="">Select Date</option>
            {Object.keys(groupedByDate).map(date => (
              <option key={date} value={date}>{date}</option>
            ))}
          </select>

          <select
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
            disabled={!selectedDate}
          >
            <option value="">Select Time</option>
            {selectedDate &&
              groupedByDate[selectedDate].map((time, idx) => (
                <option key={idx} value={time}>{time}</option>
              ))
            }
          </select>
        </div>

        <div className="form-group">
          <textarea
            name="comments"
            placeholder="Additional Comments (optional)"
            value={formData.comments}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="booking-submit">Submit Booking</button>
      </form>
    </section>
  );
}

export default Bookings;
