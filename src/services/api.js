import axios from 'axios';

const api = axios.create({
  baseURL: 'https://wesley1535.herokuapp.com',
});

export default api;
