import { Avatar, Box, Typography,  IconButton, Stack } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import profileImg from "../assets/profile.jpg";

function HeroSection() {
  return (
    
    <Box
      sx={{
        height: "60vh",
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
        Ingeniero de Software | Backend Developer | Machine Learning
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
    </Box>
  );
}

export default HeroSection;
