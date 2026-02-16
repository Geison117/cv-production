import { useEffect, useState } from "react";
import { getCurrentUser } from "../services/authService";

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getCurrentUser()
      .then(setUser)
      .catch(() => console.log("No autenticado"));
  }, []);

  if (!user) return <p>Cargando...</p>;

  return (
    <div>
      <h2>Bienvenido {user.nombre}</h2>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default Profile;
