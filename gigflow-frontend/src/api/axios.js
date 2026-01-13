import axios from "axios";

const api = axios.create({
  baseURL: "https://gigflow-4ohh.onrender.com",
  withCredentials: true, // IMPORTANT for cookies
});

export default api;
