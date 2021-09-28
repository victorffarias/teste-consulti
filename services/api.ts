import axios from 'axios';

export const service = axios.create({
    baseURL: "http://tst.sportibrasil.com.br/Services/"
})

export const api = axios.create({});