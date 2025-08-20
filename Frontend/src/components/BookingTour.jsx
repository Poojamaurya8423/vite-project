import React, { useState } from 'react';
import './BookingTour.css';

const BookingTour = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    tourType: '',
    groupSize: 1,
    specialRequests: ''
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    // Validate date is not in the past
    const selectedDate = new Date(formData.date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (selectedDate < today) {
      setMessage('Error: Please select a future date for your tour');
      setLoading(false);
      return;
    }

    try {
      // Map frontend data to backend structure
      const bookingData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        preferredDate: formData.date,
        package: formData.tourType.toLowerCase(),
        guests: parseInt(formData.groupSize),
        specialRequests: formData.specialRequests
      };

      // Create booking
      const response = await fetch('http://localhost:5000/api/book-tour', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData)
      });

      const result = await response.json();

      if (response.ok) {
        // Send notification
        await sendBookingNotification(result.booking);
        
        setMessage('Booking successful! You will receive a confirmation notification.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          date: '',
          tourType: '',
          groupSize: 1,
          specialRequests: ''
        });
      } else {
        setMessage(`Error: ${result.message || result.error || 'Booking failed'}`);
      }
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const sendBookingNotification = async (bookingData) => {
    try {
      // Send email notification
      await fetch('http://localhost:5000/api/notifications/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: bookingData.email,
          subject: 'Booking Confirmation',
          message: `Thank you for booking! Your ${bookingData.tourType} tour is confirmed for ${bookingData.date}.`
        })
      });

      // Send SMS notification
      await fetch('http://localhost:5000/api/notifications/sms', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: bookingData.phone,
          message: `Booking confirmed! Your ${bookingData.tourType} tour is scheduled for ${bookingData.date}.`
        })
      });
    } catch (error) {
      console.error('Notification error:', error);
    }
  };

  return (
    <div className="booking-tour">
      <h1>Book Your Tour</h1>
      <p>Welcome to our booking page. Select your preferred tour package below.</p>
      
      {message && (
        <div className={`message ${message.includes('Error') ? 'error' : 'success'}`}>
          {message}
        </div>
      )}
      
      <div className="booking-form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name:</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name}
              onChange={handleChange}
              required 
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email}
              onChange={handleChange}
              required 
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="phone">Phone Number:</label>
            <input 
              type="tel" 
              id="phone" 
              name="phone" 
              value={formData.phone}
              onChange={handleChange}
              required 
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="date">Preferred Date:</label>
            <input 
              type="date" 
              id="date" 
              name="date" 
              value={formData.date}
              onChange={handleChange}
              required 
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="tourType">Tour Package:</label>
            <select 
              id="tourType" 
              name="tourType" 
              value={formData.tourType}
              onChange={handleChange}
              required
            >
              <option value="">Select a package</option>
              <option value="Adventure">Adventure Package</option>
              <option value="Cultural">Cultural Package</option>
              <option value="Wildlife">Wildlife Package</option>
              <option value="Beach">Beach Package</option>
              <option value="Mountain">Mountain Package</option>
            </select>
          </div>
          
          <div className="form-group">
            <label htmlFor="groupSize">Number of Guests:</label>
            <input 
              type="number" 
              id="groupSize" 
              name="groupSize" 
              min="1" 
              max="50" 
              value={formData.groupSize}
              onChange={handleChange}
              required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="specialRequests">Special Requests:</label>
            <textarea 
              id="specialRequests" 
              name="specialRequests" 
              value={formData.specialRequests}
              onChange={handleChange}
              rows="3"
              placeholder="Any special requirements or preferences..."
            />
          </div>
          
          <button 
            type="submit" 
            className="submit-btn" 
            disabled={loading}
          >
            {loading ? 'Processing...' : 'Book Now'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingTour;
