import api from "../api/axiosClient";


export const login = async (email, password) => {
  try {
    const response = await api.post("/auth/login", {
      email,
      password,
    });
    return response.data;  // devolver los datos
  } catch (error) {
    console.error(error);
    throw error;  // para que quien llame a login pueda manejar el error
  }
};

const cont = 1

export const getCurrentUser = async () => {
  const response = await api.get("/users/me");
  return response.data;
};

export const logout = () => {
  localStorage.removeItem("token");
};


