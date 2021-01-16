import react from 'react';
import axios from 'axios';

const initInterceptor = () => {
    axios.defaults.baseURL = process.env.REACT_APP_API_URL;
    axios.defaults.params = {
        'apiKey': process.env.REACT_APP_API_KEY
    };

    axios.interceptors.request.use((config) => {
        return config;
    });
}

export default initInterceptor;
