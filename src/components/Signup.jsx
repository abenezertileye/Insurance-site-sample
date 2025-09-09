import React, { useState } from "react";
import { Box, Typography, TextField, Button, Link } from "@mui/material";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle signup logic here
    console.log("Signup data:", formData);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F4FFFC", // light orange-ish background
        px: 3,
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          maxWidth: 400,
          width: "100%",
          p: 5,
          borderRadius: 3,
          boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
          backgroundColor: "#fff",
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 3, color:"#000" }}>
          Sign Up
        </Typography>

        <TextField
          label="Full Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />

        <TextField
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />

        <TextField
          label="Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />

        <TextField
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          value={formData.confirmPassword}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />

        <Button
          type="submit"
          variant="contained"
          sx={{
            mt: 3,
            width: "100%",
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
        >
          Sign Up
        </Button>

        <Typography
          variant="body2"
          sx={{ mt: 2, textAlign: "center", color: "text.secondary" }}
        >
          Already have an account?{" "}
          <Link href="/login" underline="hover">
            Log in
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Signup;
