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
    mt={6}
    p={4}
    sx={{
      backgroundColor: "rgba(255,255,255,0.1)",
      borderRadius: 3,
      maxWidth: 900,
      margin: "40px auto",
      backdropFilter: "blur(10px)"
    }}
  >

    <Typography variant="h3" fontWeight="bold" mb={2}>
      Bienvenido {user.nombre}
    </Typography>
    <Typography variant="h5" fontWeight="bold" mb={2}>
      🔓 Esta es mi información privada
    </Typography>

    {/* Contacto */}
    <Typography variant="body1" mb={1}>
      📧 Email: geisonblanco94@gmail.com
    </Typography>

    <Typography variant="body1" mb={3}>
      📱 WhatsApp: +57 311 521 4574
    </Typography>

    {/* Experiencia detallada */}
    <Typography variant="h6" fontWeight="bold" mt={2} mb={1}>
      Formación y Experiencia
    </Typography>

    <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
       Ingeniero de Sistemas egresado de la Universidad Industrial de Santander desde 2024, Colombia, tengo conocimiento en JavaScript, Python, he manejado bases de datos en SQL, y he manejado librerias para manipular datos en JSON y en XML. Me gusta mucho la programación basada en objetos, y resolver problemas reales de software. Durante casi 2 años he trabajado como Freelancer en la plataforma de Outlier participando en proyectos de etiquetado de datos donde mis funciones principales han involucrado la evaluación de las respuestas de los modelos de inteligencia artificial de los clientes sobre temas de programación en distintos lenguajes como Java, Python, C++, mediante métricas como el grado de seguimiento de instrucciones, la veracidad de las respuestas, la completitud de las mismas, y proveer la respuesta ideal junto con sus rúbricas.

    </Typography>

     <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
       Mientras estuve estudiando pertenecí a un grupo de investigación que desarrollaba algoritmos de Inteligencia Artificial por lo que tengo conocimiento en redes neuronales profundas y pertenecí a proyectos relacionados a la estimación de la pose y a la recuperación de imágenes hiperespectrales a partir de adquisiciones de muestras comprimidas.

    </Typography>


    {/* Video */}
    <Typography variant="h6" fontWeight="bold" mt={4} mb={2}>
      Video de Presentación
    </Typography>

   <Box textAlign="center">
  <Button
    variant="contained"
    component="a"
    href="https://youtube.com/shorts/4t0IlnEyTEc"
    target="_blank"
    rel="noopener"
    sx={{ mt: 2 }}
  >
    Ver video en YouTube
  </Button>
</Box>

    {/* Proyectos */}
    <Typography variant="h6" fontWeight="bold" mt={4} mb={1}>
      Proyectos Destacados
    </Typography>

    <Typography variant="body2">
        <ul>
  <li> Hoja de vida Página Web: Sistema de autenticación con FastAPI + JWT, Plataforma Full-Stack con React + PostgreSQL, Integraciones API externas y automatización de procesos.</li>
  <li>Android App Demo for restaurant in Java: <a href="https://youtu.be/kxKIEDHZOFo" target="_blank" rel="noopener noreferrer">Video</a>
</li>
</ul>
<Typography variant="h6" fontWeight="bold" mt={4} mb={2}>
      Hoja de vida en PDF
    </Typography>

<Button
  variant="outlined"
  component="a"
  href="/cv.pdf"
  target="_blank"
  rel="noopener"
  sx={{
    mt: 2,
    color: "black",
    borderColor: "white",
    "&:hover": {
      borderColor: "#90caf9",
      color: "#90caf9"
    }
  }}
>

  📄 Ver / Descargar CV
</Button>
      
    </Typography>



      <Button
        variant="outlined"
        

         sx={{
        color: "black",
         margin: "30px",
        
      backgroundColor: "#da4545",
      "&:hover": { backgroundColor: "#cc0000" }
    }}
        onClick={handleLogout}
      >
        Cerrar sesión
      </Button>    
  </Box>
)}


export default PrivateSection;
