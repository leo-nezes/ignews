import axios from 'axios';

export const api = axios.create({
  baseURL: '/api'
});
// O Axios entenderá que o início da rota é http://localhost:3000 e adicionará o /api no final.
