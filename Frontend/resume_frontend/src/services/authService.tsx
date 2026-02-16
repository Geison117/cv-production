import api from "../api/axios";

export const login = async (email, password) => {
  const response = await api.post("/auth/login", {
    email,
    password,
  });

  const { access_token } = response.data;

  // Guardar token
  localStorage.setItem("token", access_token);

  return response.data;
};

export const getCurrentUser = async () => {
  const response = await api.get("/users/me");
  return response.data;
};

export const logout = () => {
  localStorage.removeItem("token");
};
