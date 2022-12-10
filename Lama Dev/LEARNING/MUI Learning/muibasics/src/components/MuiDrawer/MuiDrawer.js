import { Drawer, IconButton, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import { useState } from "react";
function MuiDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Stack>
      <Typography variant="h6">This is a drawer component</Typography>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        onClick={() => setIsOpen(true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer anchor="left" open={isOpen} onClose={() => setIsOpen(false)}>
        <Box p={2} width="250px" textAlign="center" role="presentation">
          <Typography variant="h6" component="div">
            Side Panel
          </Typography>
        </Box>
      </Drawer>
    </Stack>
  );
}

export default MuiDrawer;
