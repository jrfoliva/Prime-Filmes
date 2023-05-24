import axios from "axios";
// Base da URL: https://api.themoviedb.org/3/
// URL da API: /movie/now_playing?api_key=4510779727c250e79ede9bc54b072a90&language=pt-BR

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;