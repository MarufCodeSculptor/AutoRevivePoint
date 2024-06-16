import { useEffect, useState } from 'react';
import axiosInstance from './useAxiosSecure';

const useServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    // fetch('https://auto-revive-point-server.vercel.app/services')
    //     .then(res => res.json())
    //     .then(data => setServices(data))
    axiosInstance.get('/services').then(res => setServices(res.data));
  }, []);

  return services;
};

export default useServices;
