// src/pages/Login.jsx
import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Avatar,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #E0F7FA 0%, #F4FFFC 100%)",
        fontFamily: "'Urbanist', sans-serif",
        px: 2,
      }}
    >
      <Paper
        elevation={10}
        sx={{
          maxWidth: 400,
          width: "100%",
          p: 6,
          borderRadius: 3,
          textAlign: "center",
          backgroundColor: "#fff",
          boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
        }}
      >
        <Avatar
          sx={{
            m: "0 auto",
            bgcolor: "#305CDE",
            width: 56,
            height: 56,
            mb: 2,
          }}
        >
          <LockOutlinedIcon fontSize="large" />
        </Avatar>

        <Typography variant="h5" sx={{ fontWeight: 700, mb: 4 }}>
          Welcome Back
        </Typography>

        <TextField label="Email" variant="outlined" fullWidth sx={{ mb: 3 }} />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          sx={{ mb: 4 }}
        />

        <Button
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: "#305CDE",
            color: "#fff",
            fontWeight: "bold",
            boxShadow: "0 4px 0 0 #A8E6CF",
            borderRadius: "8px",
            py: 1.5,
            fontSize: "1rem",
            "&:hover": {
              backgroundColor: "#254BB5",
              boxShadow: "0 4px 0 0 #A8E6CF",
            },
          }}
        >
          Log In
        </Button>

        <Typography variant="body2" sx={{ mt: 3 }}>
          Don't have an account?{" "}
          <Button
            sx={{ textTransform: "none", fontWeight: 600, color: "#305CDE" }}
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </Button>
        </Typography>
      </Paper>
    </Box>
  );
};

export default Login;
