// frontend/src/authProvider.tsx

import { AuthProvider } from 'react-admin';
import axios from 'axios';

const authProvider: AuthProvider = {
  login: async ({ username, password }) => {
    try {
      const response = await axios.post('https://localhost:3001/api/auth/login', {
        email: username,
        password: password,
      });
      localStorage.setItem('token', response.data.token);
    } catch (error) {
      throw new Error('Invalid credentials');
    }
  },
  logout: () => {
    localStorage.removeItem('token');
    return Promise.resolve();
  },
  checkAuth: () => {
    return localStorage.getItem('token') ? Promise.resolve() : Promise.reject();
  },
  checkError: ({ status }) => {
    if (status === 401) {
      localStorage.removeItem('token');
      return Promise.reject();
    }
    return Promise.resolve();
  },
  getPermissions: () => Promise.resolve(),
};

export default authProvider;
