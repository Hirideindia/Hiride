export const isAuthenticated = () => {
  // Check if user is authenticated
  return !!localStorage.getItem('token');
};

export const login = (token) => {
  // Save token to localStorage
  localStorage.setItem('token', token);
};

export const logout = () => {
  // Remove token from localStorage
  localStorage.removeItem('token');
};

export const getToken = () => {
  // Get token from localStorage
  return localStorage.getItem('token');
};
