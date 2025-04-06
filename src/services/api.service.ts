import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const authAPI = {
  register: (data: {
    first_name: string;
    last_name: string;
    email: string;
    phone_number: string;
    password: string;
    confirmPassword: string;
  }) => api.post('/users/register', data),

  login: (login: string, password: string) =>
    api.post('/users/login', { login, password }),

  getProfile: () => api.get('/users/me'),
};

export default api;
