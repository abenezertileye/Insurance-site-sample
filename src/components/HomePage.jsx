import React from "react";
import { AppBar, Toolbar, Button, Typography, Box } from "@mui/material";
import heroBackground from "../assets/hero_bg.png";
import logoImg from "../assets/logo_img.png";
import Navbar from "./Navbar";

const Home = ({ scrollToJoinUs }) => {
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
      <Navbar></Navbar>
      {/* Hero Content */}
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          alignItems: "center",
          width: "100%",
          paddingLeft: { xs: 3, sm: 8 },
        }}
      >
        <Box sx={{ flex: 1, maxWidth: "55%", color: "#fff" }}>
          <Typography
            variant="h1"
            component="h1"
            gutterBottom
            sx={{
              fontSize: { xs: "2.5rem", sm: "4rem", md: "5rem" },
              color: "#09384D",
              fontWeight: 700,
              lineHeight: 1.2,
              // flat shadow on right side
            }}
          >
            <Box
              component="span"
              sx={{ color: "#305CDE", textShadow: "4px 0 0 #A8E6CF" }}
            >
              Protect
            </Box>{" "}
            What Matters Most
          </Typography>

          <Typography
            variant="h6"
            gutterBottom
            sx={{
              fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
              mb: 4,
              color: "#000",
            }}
          >
            Comprehensive insurance solutions for your family, health, and
            business. Experience peace of mind with SafeLife Insurance.
          </Typography>
          {/* Button stays as-is */}
          <Button
            variant="contained"
            sx={{
              mt: 3,
              width: "150px",
              backgroundColor: "#305CDE",
              color: "#fff",
              fontWeight: "bold",
              boxShadow: "0 4px 0 0 #A8E6CF",
              borderRadius: "8px",
              "&:hover": {
                backgroundColor: "#254BB5",
                boxShadow: "0 4px 0 0 #A8E6CF",
              },
            }}
            onClick={scrollToJoinUs} // call the function passed from App
          >
            Get Quote
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
