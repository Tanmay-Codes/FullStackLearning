import { Box, IconButton, Tooltip } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import React from "react";

function MuiTooltip() {
  return (
    <Box>
      <Tooltip title="Check Mails" placement="left" arrow>
        <IconButton>
          <MailIcon />
        </IconButton>
      </Tooltip>
      {/* Another tyoe of ToolTip */}
      <Tooltip
        title="Check Mails"
        placement="left"
        arrow
        enterDelay={500}
        leaveDelay={200}
      >
        <IconButton>
          <MailIcon />
        </IconButton>
      </Tooltip>
    </Box>
  );
}

export default MuiTooltip;
