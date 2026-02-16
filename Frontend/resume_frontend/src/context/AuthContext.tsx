/*import { createContext, useEffect, useState } from "react";
import { getCurrentUser } from "../services/authService";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCurrentUser()
      .then(setUser)
      .catch(() => setUser(null))
      .finally(() => setLoading(false));
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
*/

import { createContext, useEffect, useState } from "react";
import { getCurrentUser } from "../services/authService";

export const AuthContext = createContext({
  user: null,
  setUser: (_: any) => {},
  loading: true,
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadCurrentUser = async () => {
    try {
      // fetchClient ya maneja baseURL y Authorization header automáticamente
      const data = await getCurrentUser("/users/me", { method: "GET" });
      setUser(data);
    } catch (err) {
      console.error("Error fetching current user:", err);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Solo se ejecuta al montar el componente
    loadCurrentUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
};