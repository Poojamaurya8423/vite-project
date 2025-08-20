const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');
const { sendSMSNotification } = require('../services/smsService');

// Create a new booking
router.post('/book-tour', async (req, res) => {
  try {
    const { name, email, phone, preferredDate, package: tourPackage, guests, specialRequests } = req.body;

    // Validate required fields
    if (!name || !email || !phone || !preferredDate || !tourPackage || !guests) {
      return res.status(400).json({ 
        success: false, 
        message: 'All required fields must be provided' 
      });
    }

    // Validate package type
    const validPackages = ['adventure', 'cultural', 'wildlife', 'beach', 'mountain'];
    if (!validPackages.includes(tourPackage)) {
      return res.status(400).json({ 
        success: false, 
        message: 'Invalid tour package selected' 
      });
    }

    // Validate date is not in the past
    const selectedDate = new Date(preferredDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (selectedDate < today) {
      return res.status(400).json({ 
        success: false, 
        message: 'Tour date cannot be in the past' 
      });
    }

    // Create new booking
    const newBooking = new Booking({
      name,
      email,
      phone,
      preferredDate: new Date(preferredDate),
      package: tourPackage,
      guests,
      specialRequests
    });

    // Save booking to database
    const savedBooking = await newBooking.save();

    // Send SMS notification
    try {
      await sendSMSNotification(savedBooking);
    } catch (smsError) {
      console.error('Failed to send SMS notification:', smsError);
      // Don't fail the booking if SMS fails
    }

    res.status(201).json({
      success: true,
      message: 'Booking created successfully',
      booking: savedBooking
    });

  } catch (error) {
    console.error('Error creating booking:', error);
    res.status(500).json({
      success: false,
      message: 'Error creating booking',
      error: error.message
    });
  }
});

// Get all bookings
router.get('/bookings', async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ bookingDate: -1 });
    res.json({
      success: true,
      bookings
    });
  } catch (error) {
    console.error('Error fetching bookings:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching bookings',
      error: error.message
    });
  }
});

// Get booking by ID
router.get('/bookings/:id', async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (!booking) {
      return res.status(404).json({
        success: false,
        message: 'Booking not found'
      });
    }
    res.json({
      success: true,
      booking
    });
  } catch (error) {
    console.error('Error fetching booking:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching booking',
      error: error.message
    });
  }
});

// Update booking status
router.put('/bookings/:id/status', async (req, res) => {
  try {
    const { status } = req.body;
    
    if (!['pending', 'confirmed', 'cancelled'].includes(status)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid status value'
      });
    }

    const booking = await Booking.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: 'Booking not found'
      });
    }

    res.json({
      success: true,
      message: 'Booking status updated successfully',
      booking
    });
  } catch (error) {
    console.error('Error updating booking status:', error);
    res.status(500).json({
      success: false,
      message: 'Error updating booking status',
      error: error.message
    });
  }
});

module.exports = router;
