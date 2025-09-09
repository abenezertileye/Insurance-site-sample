// src/pages/Testimonials.jsx
import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Avatar,
  Stack,
} from "@mui/material";
import testimonialBackground from "../assets/Testimonal_img.png"; // background image

const testimonials = [
  {
    name: "John Doe",
    title: "CEO, Global Bank",
    text: "SafeLife Insurance has been a reliable partner for our company. Their services are excellent and trustworthy.",
    avatar: "", // optional: add image URL or leave empty for initials
  },
  {
    name: "Mary Smith",
    title: "Founder, HealthPlus",
    text: "I highly recommend SafeLife Insurance for anyone looking for comprehensive and dependable coverage.",
    avatar: "",
  },
  {
    name: "Alex Johnson",
    title: "Manager, AutoSecure",
    text: "Their team is professional and responsive. We feel confident knowing SafeLife Insurance has our back.",
    avatar: "",
  },
];

const Testimonials = () => {
  return (
    <Box
      sx={{
        minHeight: "25vh",
        width: "100%",
        backgroundImage: `url(${testimonialBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
        py: 8,
      }}
    >
      <Container>
        <Typography
          variant="h3"
          component="h2"
          align="center"
          gutterBottom
          sx={{ fontWeight: "bold", color: "#fff", mb: 6 }}
        >
          What Our Clients Say
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ backgroundColor: "rgba(255, 255, 255, 0.85)" }}>
                <CardContent>
                  <Typography variant="body1" gutterBottom>
                    "{testimonial.text}"
                  </Typography>

                  {/* Avatar and Name */}
                  <Stack direction="row" spacing={2} alignItems="center" mt={2}>
                    <Avatar sx={{ bgcolor: "#305CDE" }}>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </Avatar>
                    <Box>
                      <Typography
                        variant="subtitle1"
                        sx={{ fontWeight: "bold" }}
                      >
                        {testimonial.name}
                      </Typography>
                      <Typography variant="subtitle2" color="text.secondary">
                        {testimonial.title}
                      </Typography>
                    </Box>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Testimonials;
