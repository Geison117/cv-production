import axios from "axios";

const api = axios.create({
  baseURL: "/api"//import.meta.env.VITE_API_URL, //"/api", // usando proxy de Vite
});

// 🔐 Interceptor para agregar token automáticamente
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;