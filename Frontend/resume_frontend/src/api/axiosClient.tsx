/*import axios from "axios";


const api = axios.create({
  baseURL: "https://hoja-de-vida-full-stack-ewp4.vercel.app/",  // URL de backend en Render
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
*/

// fetchClient.ts
const BASE_URL = "https://hoja-de-vida-full-stack-ewp4.vercel.app"; // tu backend en Render

export async function fetchClient(
  endpoint: string,
  options: RequestInit = {}
) {
  // Obtener token si existe
  const token = localStorage.getItem("token");

  // Construir headers, incluyendo Authorization si hay token
  const headers: HeadersInit = {
    "Content-Type": "application/json",
    ...(token && { Authorization: `Bearer ${token}` }),
    ...(options.headers || {}),
  };

  // Hacer la petición con fetch
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    ...options,
    headers,
    credentials: "include", // <--- envía cookies si las hay
  });

  // Revisar si la respuesta es OK
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw { status: response.status, ...errorData };
  }

  // Devolver JSON
  return response.json();
}
