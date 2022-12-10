import { Avatar, Card, IconButton, TextField, Tooltip } from "@mui/material";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import MicIcon from "@mui/icons-material/Mic";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import ArticleIcon from "@mui/icons-material/Article";
import SendIcon from "@mui/icons-material/Send";
import React from "react";
import { Stack } from "@mui/system";

function UserPostBox() {
  return (
    <Card sx={{ padding: "18px", marginBottom: "10px", borderRadius: "10px" }}>
      <Stack alignItems="center" justifyContent="space-between">
        <Stack
          direction="row"
          spacing={2}
          sx={{ width: "100%" }}
          justifyContent="center"
          alignItems="center"
        >
          <Avatar
            sx={{
              height: "70px",
              width: "70px",
            }}
            src="https://images.unsplash.com/photo-1654900365111-34ae7a645c2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=517&q=80"
          ></Avatar>
          <TextField
            variant="outlined"
            sx={{ width: "100%" }}
            placeholder="Start a post"
          />
          <IconButton color="inherit">
            <SendIcon />
          </IconButton>
        </Stack>
        <Stack spacing={2} direction="row">
          <Tooltip title="Insert Photo" arrow>
            <IconButton color="inherit">
              <InsertPhotoIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Insert Audio" arrow>
            <IconButton color="inherit">
              <MicIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Capture Image" arrow>
            <IconButton color="inherit">
              <CameraAltIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Write an article" arrow>
            <IconButton color="inherit">
              <ArticleIcon />
            </IconButton>
          </Tooltip>
        </Stack>
      </Stack>
    </Card>
  );
}

export default UserPostBox;
