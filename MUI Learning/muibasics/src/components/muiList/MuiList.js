import {
  Avatar,
  Box,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import React from "react";

function MuiList() {
  return (
    <Box sx={{ width: "400px", bgcolor: "#efefef" }}>
      <List>
        {/* First kind of item */}
        <ListItem disablePadding>
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText primary="List Item 1" secondary="Secondary Text" />
        </ListItem>
        {/* Seconed Kind of item  */}
        <ListItem disablePadding>
          <ListItemIcon>
            <ListItemAvatar>
              <Avatar>
                <MailIcon />
              </Avatar>
            </ListItemAvatar>
          </ListItemIcon>
          <ListItemText primary="List Item 2" secondary="Secondary Text" />
        </ListItem>
        {/* Third Kind of item */}
        <Divider />
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <ListItemAvatar>
                <Avatar>
                  <MailIcon />
                </Avatar>
              </ListItemAvatar>
            </ListItemIcon>
            <ListItemText
              primary="Clickable list Item"
              secondary="Secondary Text"
            />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
}

export default MuiList;
