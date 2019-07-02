import axios from 'axios';

const api = axios.create({
  baseURL: 'https://apismartgarden.flowcorp.com.br'
});

export default api;
