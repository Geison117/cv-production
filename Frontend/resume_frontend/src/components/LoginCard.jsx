import { useState, useContext } from "react";
import { Card, CardContent, TextField, Button, Typography } from "@mui/material";
import { login } from "../services/authService";
import { AuthContext } from "../context/AuthContext";

function LoginCard() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      const user = await import("../services/authService").then(m => m.getCurrentUser());
      setUser(user);
    } catch {
      alert("Credenciales inválidas");
    }
  };

  return (
    <Card sx={{ maxWidth: 400, margin: "auto", mt: -8, p: 2 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Acceso Privado
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            fullWidth
            margin="normal"
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            variant="contained"
            fullWidth
            type="submit"
            sx={{ mt: 2 }}
          >
            Iniciar Sesión
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

export default LoginCard;
