import {
  SpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
  Typography,
} from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import ShareIcon from "@mui/icons-material/Share";
import PrintIcon from "@mui/icons-material/Print";
import React from "react";
import { Stack } from "@mui/system";

function MuiSpeedDial() {
  return (
    <Stack>
      <Typography variant="h6">
        Look for SpeedDial at the page starting
      </Typography>
      <SpeedDial
        ariaLabel="Navagation speed dial"
        sx={{ position: "absolute", bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
      >
        <SpeedDialAction icon={<ContentCopyIcon />} tooltipTitle="Copy" />
        <SpeedDialAction icon={<ShareIcon />} tooltipTitle="Share" />
        <SpeedDialAction icon={<PrintIcon />} tooltipTitle="Print" />
      </SpeedDial>
    </Stack>
  );
}

export default MuiSpeedDial;
