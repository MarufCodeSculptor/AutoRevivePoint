// axiosConfig.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://auto-revive-point-server.vercel.app',
  withCredentials: true,
  timeout: 1000,
  headers: { 'Content-Type': 'application/json' },
});

export default axiosInstance;
