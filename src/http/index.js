import axios from 'axios';

export const API_URL = 'https://idontknowfo.herokuapp.com';

const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL
})


export default $api;

