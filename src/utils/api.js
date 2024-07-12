import axios from 'axios';

const API_URL = 'https://your-api-url.com';

export const sendOtp = async (mobile) => {
  try {
    const response = await axios.post(`${API_URL}/send-otp`, { mobile });
    return response.data;
  } catch (error) {
    console.error('Error sending OTP:', error);
    throw error;
  }
};

export const verifyOtp = async (mobile, otp) => {
  try {
    const response = await axios.post(`${API_URL}/verify-otp`, { mobile, otp });
    return response.data;
  } catch (error) {
    console.error('Error verifying OTP:', error);
    throw error;
  }
};

export const signUp = async (userDetails) => {
  try {
    const response = await axios.post(`${API_URL}/signup`, userDetails);
    return response.data;
  } catch (error) {
    console.error('Error signing up:', error);
    throw error;
  }
};

export const bookDriver = async (bookingDetails) => {
  try {
    const response = await axios.post(`${API_URL}/book-driver`, bookingDetails);
    return response.data;
  } catch (error) {
    console.error('Error booking driver:', error);
    throw error;
  }
};

export const getBookings = async (userId) => {
  try {
    const response = await axios.get(`${API_URL}/bookings`, { params: { userId } });
    return response.data;
  } catch (error) {
    console.error('Error fetching bookings:', error);
    throw error;
  }
};

export const getAdminData = async () => {
  try {
    const response = await axios.get(`${API_URL}/admin-data`);
    return response.data;
  } catch (error) {
    console.error('Error fetching admin data:', error);
    throw error;
  }
};
