# Complete Booking Tour System Setup

## Overview
This system includes:
- Frontend: React + Vite
- Backend: Node.js + Express + MongoDB
- SMS Notifications: Twilio integration

## Setup Instructions

### 1. Backend Setup
```bash
cd vite-project/backend
npm install

# Set up environment variables in .env file:
# TWILIO_ACCOUNT_SID=your_account_sid
# TWILIO_AUTH_TOKEN=your_auth_token
# TWILIO_PHONE_NUMBER=your_twilio_number
# NOTIFICATION_PHONE_NUMBER=8423010692

# Start MongoDB service
# Then start the backend:
npm start
```

### 2. Frontend Setup
```bash
cd vite-project
npm install
npm run dev
```

### 3. Twilio Setup
1. Create a Twilio account at https://www.twilio.com
2. Get your Account SID and Auth Token from the Twilio Console
3. Purchase a phone number from Twilio
4. Update the .env file with your credentials

### 4. Test the System
1. Open http://localhost:5173 in your browser
2. Navigate to the booking page
3. Fill out the form and submit
4. Check the phone number 8423010692 for SMS notifications

## API Endpoints
- POST /api/book-tour - Create new booking
- GET /api/bookings - Get all bookings
- GET /api/bookings/:id - Get specific booking
- PUT /api/bookings/:id/status - Update booking status

## Features
- Real-time SMS notifications to 8423010692
- MongoDB storage for all bookings
- Responsive booking form
- Error handling and validation
