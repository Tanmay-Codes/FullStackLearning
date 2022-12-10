import { Button, ButtonGroup, IconButton, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import SendIcon from "@mui/icons-material/Send";
import React from "react";

export default function Buttons() {
  return (
    <Stack>
      <Stack>
        <Typography variant="h1">This is H1 Heading</Typography>
        <Typography variant="h3">this is h3 heading</Typography>
        <Typography variant="subtitle1" mb={3}>
          this is a paragraph
        </Typography>
      </Stack>
      <Stack direction="row" spacing={3}>
        <Button variant="contained" color="primary" disableElevation>
          Hello
        </Button>
        <Button variant="outlined" color="secondary" disableFocusRipple>
          Hello
        </Button>
        <Button variant="text" color="warning" href="http/:www.google.com">
          Hello
        </Button>
        <Button variant="contained" startIcon={<SendIcon />}>
          Send
        </Button>
        <IconButton aria-label="send" size="sm" color="warning">
          <SendIcon />
        </IconButton>
      </Stack>
      <Stack direction="row" spacing={2} mt={3}>
        <ButtonGroup
          aria-label="button-group"
          variant="contained"
          orientation="vertical"
        >
          <Button>Button 1</Button>
          <Button>Button 2</Button>
          <Button>Button 3</Button>
        </ButtonGroup>
      </Stack>
    </Stack>
  );
}
