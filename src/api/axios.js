import axios from "axios";
import { BASE_URL } from "../config/config";
export default axios.create(
  {
    baseURL: BASE_URL,
  },
  {
    withCredentials: true,
  }
);

let token = localStorage.getItem('token')

export let instance = axios.create({
  baseURL: BASE_URL,
}, {
  withCredentials: true
})

instance.interceptors.request.use((request) => {
  request.headers = `Bearer ${token}`
  return request
})
instance.interceptors.response.use((responce) => {
  return responce
})