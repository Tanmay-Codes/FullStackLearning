import { TextField } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

function Textbox() {
  return (
    <Stack spacing={4} mt={3}>
      <Stack direction="row" spacing={2}>
        <TextField label="Name" variant="outlined" />
        <TextField label="Name" variant="filled" />
        <TextField label="Name" variant="standard" />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField
          label="Name"
          variant="outlined"
          size="small"
          color="secondary"
        />
        <TextField
          label="Short Name"
          size="small"
          required
          helperText="less than 10"
        />
        <TextField
          label="Read Only"
          variant="standard"
          inputProps={{ readOnly: true }}
        />
      </Stack>
    </Stack>
  );
}

export default Textbox;
