import axios from 'axios';

export const api = axios.create({
    baseURL: "http://tst.sportibrasil.com.br/Services/"
})