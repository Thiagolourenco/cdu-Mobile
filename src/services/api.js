import axios from "axios";

const api = axios.create({
  // baseURL: "http://10.0.2.2:3001"
  baseURL: "http://192.168.20.106:3001"
});

export default api;
