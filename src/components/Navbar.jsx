import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import logoImg from "../assets/logo_img.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  // State for dropdown menus
  const [anchorElCars, setAnchorElCars] = useState(null);
  const [anchorElHealth, setAnchorElHealth] = useState(null);
  const [anchorElTravel, setAnchorElTravel] = useState(null);
  const [anchorElLife, setAnchorElLife] = useState(null);

  const handleOpen = (setter) => (event) => setter(event.currentTarget);
  const handleClose = (setter) => () => setter(null);

  return (
    <AppBar
      position="static"
      sx={{ background: "transparent", boxShadow: "none" }}
    >
      <Toolbar
        sx={{
          minHeight: { xs: 64, sm: 80 },
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Box
          component="img"
          src={logoImg}
          alt="SafeLife Logo"
          sx={{ height: 50 }}
        />

        {/* Menu Buttons */}
        <Box sx={{ display: "flex", gap: 2 }}>
          {/* Cars */}
          <Button
            onClick={handleOpen(setAnchorElCars)}
            sx={{ color: "#000", fontWeight: 600 }}
          >
            Cars
          </Button>
          <Menu
            anchorEl={anchorElCars}
            open={Boolean(anchorElCars)}
            onClose={handleClose(setAnchorElCars)}
            MenuListProps={{ sx: { backgroundColor: "#f0f0f0" } }}
          >
            <MenuItem onClick={handleClose(setAnchorElCars)}>
              Car Insurance
            </MenuItem>
            <MenuItem onClick={handleClose(setAnchorElCars)}>
              Premium Cars
            </MenuItem>
            <MenuItem onClick={handleClose(setAnchorElCars)}>
              Fleet Management
            </MenuItem>
          </Menu>

          {/* Health Care */}
          <Button
            onClick={handleOpen(setAnchorElHealth)}
            sx={{ color: "#000", fontWeight: 600 }}
          >
            Health Care
          </Button>
          <Menu
            anchorEl={anchorElHealth}
            open={Boolean(anchorElHealth)}
            onClose={handleClose(setAnchorElHealth)}
            MenuListProps={{ sx: { backgroundColor: "#f0f0f0" } }}
          >
            <MenuItem onClick={handleClose(setAnchorElHealth)}>
              Family Plans
            </MenuItem>
            <MenuItem onClick={handleClose(setAnchorElHealth)}>
              Hospital Coverage
            </MenuItem>
            <MenuItem onClick={handleClose(setAnchorElHealth)}>
              Wellness Programs
            </MenuItem>
          </Menu>

          {/* Travel */}
          <Button
            onClick={handleOpen(setAnchorElTravel)}
            sx={{ color: "#000", fontWeight: 600 }}
          >
            Travel
          </Button>
          <Menu
            anchorEl={anchorElTravel}
            open={Boolean(anchorElTravel)}
            onClose={handleClose(setAnchorElTravel)}
            MenuListProps={{ sx: { backgroundColor: "#f0f0f0" } }}
          >
            <MenuItem onClick={handleClose(setAnchorElTravel)}>
              Flight Insurance
            </MenuItem>
            <MenuItem onClick={handleClose(setAnchorElTravel)}>
              Vacation Coverage
            </MenuItem>
          </Menu>

          {/* Life */}
          <Button
            onClick={handleOpen(setAnchorElLife)}
            sx={{ color: "#000", fontWeight: 600 }}
          >
            Life
          </Button>
          <Menu
            anchorEl={anchorElLife}
            open={Boolean(anchorElLife)}
            onClose={handleClose(setAnchorElLife)}
            MenuListProps={{ sx: { backgroundColor: "#f0f0f0" } }}
          >
            <MenuItem onClick={handleClose(setAnchorElLife)}>
              Term Life
            </MenuItem>
            <MenuItem onClick={handleClose(setAnchorElLife)}>
              Whole Life
            </MenuItem>
            <MenuItem onClick={handleClose(setAnchorElLife)}>
              Investment Plans
            </MenuItem>
          </Menu>
        </Box>

        {/* Login Button */}
        <Button
          variant="contained"
          sx={{
            width: "100px",
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
          onClick={() => navigate("/login")}
        >
          Log in
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
