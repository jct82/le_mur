import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:3000/' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile'))}`;
  }
  return req;
});

export default API;
