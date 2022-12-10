import { Avatar, AvatarGroup } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

function MuiAvatar() {
  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={1}>
        <Avatar sx={{ bgcolor: "success.light", width: 48, height: 48 }}>
          BW
        </Avatar>
        <Avatar variant="square" sx={{ bgcolor: "primart.light" }}>
          CK
        </Avatar>
      </Stack>
      <Stack direction="row" spacing={1}>
        <AvatarGroup>
          <Avatar sx={{ bgcolor: "success.light" }}>BW</Avatar>
          <Avatar sx={{ bgcolor: "primart.light" }}>CK</Avatar>
          <Avatar
            src="https://coolthemestores.com/wp-content/uploads/2022/04/the-batman-wallpaper-background.jpg"
            alt="Batman-Image"
          >
            BW
          </Avatar>
          <Avatar src="https://images.unsplash.com/photo-1553976468-dcd9082bcd28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80">
            CK
          </Avatar>
        </AvatarGroup>
      </Stack>
    </Stack>
  );
}

export default MuiAvatar;
