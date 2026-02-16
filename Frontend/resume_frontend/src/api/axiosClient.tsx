import axios from "axios";


const api = axios.create({
  baseURL: "https://hoja-de-vida-full-stack.onrender.com/",  // URL de backend en Render
  withCredentials: true,                   // si usas cookies/JWT
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
