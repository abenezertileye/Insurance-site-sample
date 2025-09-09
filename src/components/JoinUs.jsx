// src/pages/JoinUs.jsx
import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Container,
  Grid,
} from "@mui/material";

const JoinUs = () => {
  return (
    <Box
      sx={{
        minHeight: "50vh",
        width: "100%",
        backgroundColor: "#FFE5B4", // light orange
        display: "flex",
        flexDirection: "column",
        py: 8,
      }}
    >
      <Container maxWidth="sm">
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            sx={{ fontWeight: "bold", color: "#09384D" }}
          >
            Join Us{" "}
          </Typography>
          <Typography variant="h6" sx={{ color: "#09384D" }}>
            Be part of SafeLife Insurance and help us protect what matters most.
            Fill out the form below to get started.
          </Typography>
        </Box>

        <Box
          sx={{
            backgroundColor: "#fff",
            p: 4,
            borderRadius: 2,
            boxShadow: 3,
          }}
        >
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Full Name" variant="outlined" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                type="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Message"
                variant="outlined"
                multiline
                rows={4}
              />
            </Grid>
            <Grid item xs={12} sx={{ textAlign: "center" }}>
              <Button variant="contained" color="primary" sx={{ mt: 2, px: 6 }}>
                Submit
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default JoinUs;
