// src/components/Footer.jsx
import React from "react";
import { Box, Typography, Grid, Link, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const socialIcons = [
  { icon: <FacebookIcon />, link: "#" },
  { icon: <TwitterIcon />, link: "#" },
  { icon: <LinkedInIcon />, link: "#" },
  { icon: <InstagramIcon />, link: "#" },
];

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#F4FFFC",
        py: 8,
        px: { xs: 3, sm: 6 },
      }}
    >
      <Grid container spacing={4} justifyContent="space-between">
        {/* Company */}
        <Grid item xs={12} sm={4}>
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", mb: 2, color: "#305CDE" }}
          >
            SafeLife Insurance
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Protecting what matters most. Trusted by thousands of clients
            worldwide.
          </Typography>
        </Grid>

        {/* Quick Links */}
        <Grid item xs={12} sm={4}>
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", mb: 2, color: "#305CDE" }}
          >
            Quick Links
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
            }}
          >
            {["Home", "Trusted By", "Testimonials", "Join Us"].map((link) => (
              <Link
                key={link}
                href={`/${link.toLowerCase().replace(/\s+/g, "-")}`}
                underline="none"
                sx={{
                  color: "#000",
                  fontWeight: 500,
                  transition: "0.3s",
                  "&:hover": { color: "#305CDE", ml: 1 },
                }}
              >
                {link}
              </Link>
            ))}
          </Box>
        </Grid>

        {/* Social Media */}
        <Grid item xs={12} sm={4}>
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", mb: 2, color: "#305CDE" }}
          >
            Follow Us
          </Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            {socialIcons.map((item, index) => (
              <IconButton
                key={index}
                href={item.link}
                sx={{
                  backgroundColor: "#305CDE",
                  color: "#fff",
                  "&:hover": {
                    backgroundColor: "#254BB5",
                    transform: "scale(1.1)",
                  },
                  transition: "0.3s",
                }}
              >
                {item.icon}
              </IconButton>
            ))}
          </Box>
        </Grid>
      </Grid>

      {/* Bottom text */}
      <Box sx={{ textAlign: "center", mt: 6 }}>
        <Typography variant="body2" color="text.secondary">
          &copy; {new Date().getFullYear()} SafeLife Insurance. All rights
          reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
