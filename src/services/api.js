import axios from 'axios';

const api = axios.create({
  baseURL: 'https://back-servicos.herokuapp.com',
});

export default api;
