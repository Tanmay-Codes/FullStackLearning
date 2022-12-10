import { Alert, AlertTitle, Stack } from "@mui/material";
import React from "react";

function MuiFeedbackComponents() {
  return (
    <Stack spacing={2} padding={2}>
      <Alert severity="error">This is and Error Alert</Alert>
      <Alert severity="warning">This is and Warning Alert</Alert>
      <Alert severity="info">This is and info Alert</Alert>
      <Alert severity="success">This is and Success Alert</Alert>
      {/* Here different variant */}
      <Alert variant="filled" severity="info">
        This is and info Alert
      </Alert>
      <Alert variant="outlined" severity="success">
        <AlertTitle>Success</AlertTitle>
        This is and Success Alert
      </Alert>
    </Stack>
  );
}

export default MuiFeedbackComponents;
