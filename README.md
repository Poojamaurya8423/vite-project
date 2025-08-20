# Tour Booking Application

A full-stack tour booking application built with React (Vite) frontend and Node.js backend with SMS notifications.

## Features

- **Frontend**: React 19 with Vite, Tailwind CSS, React Router DOM
- **Backend**: Node.js with Express, MongoDB, Twilio SMS integration
- **Booking System**: Complete tour booking with SMS notifications
- **Responsive Design**: Mobile-friendly interface

## Tech Stack

### Frontend
- React 19.1.1
- Vite (Build tool)
- Tailwind CSS
- React Router DOM

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- Twilio (SMS service)

## Project Structure

```
vite-project/
├── Frontend/                 # React frontend
│   ├── src/
│   │   ├── components/       # React components
│   │   ├── App.jsx          # Main App component
│   │   └── main.jsx         # Entry point
│   ├── package.json         # Frontend dependencies
│   └── vite.config.js       # Vite configuration
├── backend/                 # Node.js backend
│   ├── models/              # MongoDB models
│   ├── routes/              # API routes
│   ├── services/            # External services (SMS)
│   ├── server.js            # Main server file
│   └── package.json         # Backend dependencies
└── README.md               # This file
```

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB
- Twilio account (for SMS)

### Installation

1. Clone the repository
2. Install backend dependencies:
   ```bash
   cd backend
   npm install
   ```

3. Install frontend dependencies:
   ```bash
   cd Frontend
   npm install
   ```

4. Set up environment variables:
   - Create `.env` file in backend directory
   - Add your MongoDB URI and Twilio credentials

5. Start the development servers:
   ```bash
   # Backend (in backend directory)
   npm run dev

   # Frontend (in Frontend directory)
   npm run dev
   ```

## API Endpoints

- `POST /api/bookings` - Create a new booking
- `GET /api/bookings` - Get all bookings
- `GET /api/bookings/:id` - Get specific booking

## Environment Variables

Create a `.env` file in the backend directory:

```
MONGODB_URI=your_mongodb_connection_string
TWILIO_ACCOUNT_SID=your_twilio_account_sid
TWILIO_AUTH_TOKEN=your_twilio_auth_token
TWILIO_PHONE_NUMBER=your_twilio_phone_number
```

## Available Scripts

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Backend
- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon

## License

This project is open source and available under the [MIT License](LICENSE).
