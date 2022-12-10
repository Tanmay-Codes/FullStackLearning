import {
  AppBar,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import React from "react";
import { Stack } from "@mui/system";
import { useState } from "react";
function MuiNavbar() {
  const [anchorEL, setanchorEL] = useState(null);
  const open = Boolean(anchorEL);
  const handleClick = (e) => {
    setanchorEL(e.currentTarget);
  };
  const handleClose = () => {
    setanchorEL(null);
  };
  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          <SchoolIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          MUI Learning
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button color="inherit">Home</Button>
          <Button color="inherit">About</Button>
          <Button
            color="inherit"
            id="resources-button"
            onClick={handleClick}
            aria-controls={open ? "resources-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            endIcon={<KeyboardArrowDownIcon />}
          >
            Rsources
          </Button>
          <Button color="inherit">LogIN</Button>
        </Stack>
        <Menu
          id="resources-menu"
          anchorEl={anchorEL}
          open={open}
          MenuListProps={{ "aria-labelby": "resources-button" }}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <MenuItem onClick={handleClose}>Blog</MenuItem>
          <MenuItem onClick={handleClose}>Podcast</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

export default MuiNavbar;
