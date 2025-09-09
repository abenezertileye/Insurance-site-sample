// src/pages/TrustedBy.jsx
import React from "react";
import { Box, Typography, Grid, Container } from "@mui/material";
import BusinessIcon from "@mui/icons-material/Business";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";

const trustedClients = [
  {
    name: "Global Bank",
    icon: <AccountBalanceIcon sx={{ fontSize: 60, color: "#1976d2" }} />,
  },
  {
    name: "HealthPlus",
    icon: <LocalHospitalIcon sx={{ fontSize: 60, color: "#d32f2f" }} />,
  },
  {
    name: "SafeHomes",
    icon: <HomeWorkIcon sx={{ fontSize: 60, color: "#388e3c" }} />,
  },
  {
    name: "AutoSecure",
    icon: <DirectionsCarIcon sx={{ fontSize: 60, color: "#fbc02d" }} />,
  },
  {
    name: "FinanceCorp",
    icon: <BusinessIcon sx={{ fontSize: 60, color: "#7b1fa2" }} />,
  },
];

const TrustedBy = () => {
  return (
    <Box sx={{ minHeight: "25vh", py: 8, backgroundColor: "#F5F5F5" }}>
      <Container>
        <Typography
          variant="h3"
          component="h2"
          align="center"
          gutterBottom
          sx={{ fontWeight: "bold", mb: 6, color: "#09384D" }}
        >
          Trusted By
        </Typography>

        <Grid container spacing={4} justifyContent="center" alignItems="center">
          {trustedClients.map((client, index) => (
            <Grid
              item
              xs={6}
              sm={4}
              md={2}
              key={index}
              sx={{ textAlign: "center", color: "#000" }}
            >
              {client.icon}
              <Typography variant="subtitle1" sx={{ mt: 1 }}>
                {client.name}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default TrustedBy;
