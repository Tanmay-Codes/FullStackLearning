import * as React from "react";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { Stack } from "@mui/system";
import { Button, Typography } from "@mui/material";

export default function ToggleButtonsMultiple() {
  const [formats, setFormats] = React.useState([]);
  const [number, setNumber] = React.useState(0);

  const handleFormat = (e, nF) => {
    setFormats(nF);
  };
  const handlechange = () => {
    setNumber(number + 1);
  };

  return (
    <Stack direction="row">
      <ToggleButtonGroup
        value={formats}
        onChange={handleFormat}
        aria-label="text formatting"
      >
        <ToggleButton value="bold" aria-label="bold">
          <FormatBoldIcon />
        </ToggleButton>
        <ToggleButton value="italic" aria-label="italic">
          <FormatItalicIcon />
        </ToggleButton>
        <ToggleButton value="underlined" aria-label="underlined">
          <FormatUnderlinedIcon />
        </ToggleButton>
      </ToggleButtonGroup>
      <Stack direction="row">
        <Typography variant="h4">{number}</Typography>
        <Button variant="outlined" onClick={handlechange}>
          Increment
        </Button>
      </Stack>
    </Stack>
  );
}
