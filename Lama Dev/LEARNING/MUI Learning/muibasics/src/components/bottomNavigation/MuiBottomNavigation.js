import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import React from "react";
import { useState } from "react";
function MuiBottomNavigation() {
  const [value, setValue] = useState(0);
  return (
    <BottomNavigation
      sx={{ width: "100%", position: "absolute", bottom: 0 }}
      value={value}
      onChange={(e, newValue) => setValue(newValue)}
      showLabels
    >
      <BottomNavigationAction label="Home" icon={<HomeIcon />} />
      <BottomNavigationAction label="Favourite" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Profile" icon={<AccountBoxIcon />} />
    </BottomNavigation>
  );
}

export default MuiBottomNavigation;
