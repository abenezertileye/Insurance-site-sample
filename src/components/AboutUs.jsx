import React from "react";
import { AppBar, Toolbar, Button, Typography, Box } from "@mui/material";
import heroBackground from "../assets/abt_img.png";

const About = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Hero Content */}
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          alignItems: "center",
          width: "100%", // take full width
          paddingLeft: { xs: 2, sm: 5 }, // responsive padding
        }}
      ></Box>
    </Box>
  );
};

export default About;
