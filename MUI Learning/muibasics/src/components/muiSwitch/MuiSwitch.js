import {
  createTheme,
  FormControlLabel,
  Switch,
  ThemeProvider,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useState } from "react";

function MuiSwitch() {
  const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box
        bgcolor={"background.default"}
        color={"text.primary"}
        sx={{ width: "inherit" }}
      >
        <FormControlLabel
          label="Dark Mode"
          control={
            <Switch
              onChange={(e) =>
                mode === "light" ? setMode("dark") : setMode("light")
              }
            />
          }
        />
      </Box>
    </ThemeProvider>
  );
}

export default MuiSwitch;
