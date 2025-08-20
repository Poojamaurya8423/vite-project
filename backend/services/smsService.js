const twilio = require('twilio');

// Get Twilio configuration
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;
const notificationPhoneNumber = process.env.NOTIFICATION_PHONE_NUMBER;

// Check if Twilio is properly configured
const isTwilioConfigured = () => {
  return accountSid && 
         authToken && 
         twilioPhoneNumber && 
         notificationPhoneNumber &&
         accountSid.startsWith('AC') &&
         accountSid.length > 30;
};

const sendSMSNotification = async (bookingDetails) => {
  try {
    // Check if Twilio is properly configured
    if (!isTwilioConfigured()) {
      console.log('📱 SMS Configuration Status:');
      console.log('   TWILIO_ACCOUNT_SID:', accountSid ? '✅ Set' : '❌ Missing');
      console.log('   TWILIO_AUTH_TOKEN:', authToken ? '✅ Set' : '❌ Missing');
      console.log('   TWILIO_PHONE_NUMBER:', twilioPhoneNumber ? '✅ Set' : '❌ Missing');
      console.log('   NOTIFICATION_PHONE_NUMBER:', notificationPhoneNumber ? '✅ Set' : '❌ Missing');
      console.log('   Account SID format:', accountSid && accountSid.startsWith('AC') ? '✅ Valid' : '❌ Invalid (must start with AC)');
      
      console.log('\n💡 To enable SMS notifications:');
      console.log('   1. Sign up at https://console.twilio.com/');
      console.log('   2. Get your Account SID (starts with AC)');
      console.log('   3. Get your Auth Token');
      console.log('   4. Get a Twilio phone number');
      console.log('   5. Update vite-project/backend/.env with real values');
      
      return { success: false, message: 'SMS not configured - see console for setup instructions' };
    }

    // Initialize Twilio client with explicit error handling
    let client;
    try {
      client = new twilio(accountSid, authToken);
    } catch (error) {
      console.error('❌ Failed to initialize Twilio client:', error.message);
      return { 
        success: false, 
        message: 'Failed to initialize SMS service',
        error: error.message 
      };
    }

    // Create SMS message
    const message = `
🎫 NEW TOUR BOOKING 🎫
Name: ${bookingDetails.name}
Email: ${bookingDetails.email}
Phone: ${bookingDetails.phone}
Package: ${bookingDetails.package.toUpperCase()}
Date: ${new Date(bookingDetails.preferredDate).toLocaleDateString()}
Guests: ${bookingDetails.guests}
Special Requests: ${bookingDetails.specialRequests || 'None'}
`;

    const notificationPhone = process.env.NOTIFICATION_PHONE_NUMBER;
    
    if (!notificationPhone) {
      console.log('SMS notifications disabled - notification phone number not configured');
      return null;
    }

    const sms = await client.messages.create({
      body: message,
      from: twilioPhoneNumber,
      to: `+91${notificationPhone}` // Adjust country code as needed
    });

    console.log('✅ SMS sent successfully:', sms.sid);
    return { success: true, sid: sms.sid, message: 'SMS notification sent' };
    
  } catch (error) {
    console.error('❌ Error sending SMS:', error.message);
    return { success: false, message: error.message };
  }
};

// Test SMS configuration
const testSMSConfiguration = async () => {
  if (isTwilioConfigured()) {
    console.log('✅ SMS configuration is properly set up');
    return true;
  } else {
    console.log('❌ SMS configuration needs attention');
    return false;
  }
};

module.exports = { sendSMSNotification, testSMSConfiguration };
