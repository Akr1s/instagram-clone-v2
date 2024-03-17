import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000/api/',
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
});
