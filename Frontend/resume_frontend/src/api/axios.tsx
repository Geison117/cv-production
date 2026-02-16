import axios from "axios";

const login = async (email, password) => {
  const response = await axios.post(
    "https://hoja-de-vida-full-stack.onrender.com/auth/login",
    { email, password }
  );

  const { access_token, token_type } = response.data;

  // Guardar el token en localStorage o estado
  localStorage.setItem("token", access_token);

  return access_token;
};

// Luego, para llamadas autenticadas
const getProtectedData = async () => {
  const token = localStorage.getItem("token");

  const response = await axios.get(
    "https://hoja-de-vida-full-stack.onrender.com/protected",
    {
      headers: {
        Authorization: `Bearer ${token}` // <--- aquí va tu JWT en la cabecera
      }
    }
  );

  return response.data;
};
