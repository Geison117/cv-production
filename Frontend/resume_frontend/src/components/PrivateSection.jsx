import { Box, Typography, Button } from "@mui/material";
import { logout } from "../services/authService";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function PrivateSection({ user }) {
    const { setUser } = useContext(AuthContext);

    const handleLogout = () => {
    logout();
    setUser(null);
  };
  return (
    <Box
      sx={{
        mt: 6,
        p: 4,
        backgroundColor: "#f4f6f8",
        textAlign: "center"
      }}
    >
      <Typography variant="h4" gutterBottom>
        Bienvenido {user.nombre}
      </Typography>

      <Typography>
        🔐 Esta sección solo es visible para usuarios autenticados.
      </Typography>

      <Typography sx={{ mt: 2 }}>
        Aquí puedes mostrar:
        <br />
        - Dashboard privado  
        - Estadísticas  
        - Proyectos internos  
        - Panel administrativo  
      </Typography>   

      <>
      <h2>Bienvenido {user.nombre}</h2>

      <Button
        variant="outlined"
        sx={{ mt: 2 }}
        onClick={handleLogout}
      >
        Cerrar sesión
      </Button>
    </>   
    </Box>
     
  );
}

export default PrivateSection;
