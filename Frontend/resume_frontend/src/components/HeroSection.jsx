import { Box, Typography } from "@mui/material";

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
      <Typography variant="h2" fontWeight="bold">
        Geison Blanco
      </Typography>

      <Typography variant="h5" sx={{ mt: 2 }}>
        Ingeniero de Software | Backend Developer | Optimización Logística
      </Typography>
    </Box>
  );
}

export default HeroSection;
