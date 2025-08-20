const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true
  },
  phone: {
    type: String,
    required: true,
    trim: true
  },
  preferredDate: {
    type: Date,
    required: true
  },
  package: {
    type: String,
    required: true,
    enum: ['adventure', 'cultural', 'wildlife', 'beach', 'mountain']
  },
  guests: {
    type: Number,
    required: true,
    min: 1,
    max: 20
  },
  specialRequests: {
    type: String,
    trim: true,
    default: ''
  },
  bookingDate: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'cancelled'],
    default: 'pending'
  }
});

module.exports = mongoose.model('Booking', bookingSchema);
