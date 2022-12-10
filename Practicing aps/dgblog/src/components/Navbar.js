import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <AppBar component="nav" position="sticky">
      <Toolbar>
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{ width: "1200px", margin: "0 auto" }}
        >
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Blog Posts
          </Typography>
          <Stack direction="row" spacing={2}>
            {navItems.map((items) => (
              <Link
                key={items.id}
                style={{ textDecoration: "none", color: "white" }}
                to={items.path}
              >
                <Button variant="Text" color="inherit">
                  {items.name}
                </Button>
              </Link>
            ))}
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

const navItems = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About", path: "/about" },
  { id: 3, name: "posts", path: "/posts" },
];

export default Navbar;
