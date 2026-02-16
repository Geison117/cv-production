import { Avatar, Box, Typography,  IconButton, Stack } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import profileImg from "../assets/profile.jpg";
import SmartToyIcon from "@mui/icons-material/SmartToy";

function HeroSection() {
  return (
    
    <Box
      sx={{
        height: "90vh",
        background: "linear-gradient(135deg, #1e3c72, #2a5298)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        textAlign: "center",
      }}
    >

        <Avatar
          src={profileImg}
          alt="Foto de perfil"
          sx={{
            width: 180,
            height: 180,
            margin: "0 auto",
            border: "4px solid white",
            boxShadow: 4,
            "& img": {
              objectFit: "cover",
              objectPosition: "center top" // 👈 mueve el enfoque hacia arriba
            },
            transition: "transform 0.3s ease",
                "&:hover": {
            transform: "scale(1.2)"
            }
          }}
        />

      <Typography variant="h2" fontWeight="bold">
        Geison Blanco
      </Typography>

      <Typography variant="h5" sx={{ mt: 2 }}>
        Ingeniero de Software | Full-Stack Developer | Machine Learning
      </Typography>

      {/* Ciudad */}
    <Stack direction="row" justifyContent="center" alignItems="center" spacing={1} mt={2}>
    <LocationOnIcon />
    <Typography variant="body1">
        Floridablanca, Santander, Colombia
    </Typography>
    </Stack>

    {/* Redes Sociales */}
    <Stack direction="row" justifyContent="center" spacing={2} mt={2}>
    <IconButton
        component="a"
        href="https://www.linkedin.com/in/geison-blanco"
        target="_blank"
        rel="noopener"
        sx={{
          color: "white",
          transition: "transform 0.3s ease",
          "&:hover": {
            transform: "scale(1.2)"
          }
        }}
    >
        <LinkedInIcon fontSize="large" />
    </IconButton>

    <IconButton
        component="a"
        href="https://github.com/Geison117"
        target="_blank"
        rel="noopener"
        sx={{
            color: "white",
            transition: "transform 0.3s ease",
            "&:hover": {
              transform: "scale(1.2)"
      }
    }}
    >
        <GitHubIcon fontSize="large" />
    </IconButton>
    </Stack>


    <Typography
  variant="body1"
  sx={{
    maxWidth: 600,
    margin: "20px auto",
    opacity: 0.9,
    lineHeight: 1.6,
    px: 2
  }}
>
Ingeniero de Sistemas egresado de la Universidad Industrial de Santander desde 2024, Colombia, tengo conocimiento en JavaScript, Python, he manejado bases de datos en SQL, y he manejado librerias para manipular datos en JSON y en XML. Me gusta mucho la programación basada en objetos, y resolver problemas reales de software. Soy ingeniero de software apasionado por el desarrollo backend con FastAPI y
  la construcción de interfaces modernas con React. Me enfoco en crear
  soluciones eficientes, escalables y bien estructuradas.  
</Typography>


      <IconButton
    component="a"
    href="https://chat.openai.com/"
    target="_blank"
    rel="noopener"
    sx={{
      color: "white",
      transition: "transform 0.3s ease",
      "&:hover": { transform: "scale(1.2)" }
    }}
  >
    <SmartToyIcon fontSize="large" />

      Este proyecto fue desarrollado con ayuda de ChatGPT
  </IconButton>
     
    </Box>
  );
}

export default HeroSection;
