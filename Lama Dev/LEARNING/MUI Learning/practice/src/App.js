import { Box } from "@mui/system";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { createTheme, ThemeProvider } from "@mui/material";
import { useState } from "react";
import Home from "./pages/home/Home";

function App() {
  const [mode, setMode] = useState("light");

  // const darkTheme = createTheme({
  //   palette: {
  //     mode: mode,
  //     primary: {
  //       main: "#2e1b11",
  //     },
  //     secondary: {
  //       main: "#b3a29a",
  //     },
  //   },
  // });
  const darkTheme = createTheme({
    palette: {
      mode: mode,
      primary: {
        main: "#00897b",
      },
      secondary: {
        main: "#eeeeee",
      },
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box
        sx={
          mode === "light"
            ? { bgcolor: "secondary.light" }
            : { bgcolor: "background.default" }
        }
      >
        <Navbar mode={mode} setMode={setMode} />
        <Home />
        {/* <Test /> */}
      </Box>
    </ThemeProvider>
  );
}

export default App;
