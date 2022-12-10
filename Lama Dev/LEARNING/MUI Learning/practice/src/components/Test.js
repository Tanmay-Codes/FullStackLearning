import * as React from "react";
import { styled } from "@mui/material/styles";
import { Toolbar } from "@mui/material";
import Typography from "@mui/material/Typography";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    width: "1200px",
    margin: "0 auto",
  },
  display: "flex",
  justifyContent: "space-between",
}));

export default function MediaQuery() {
  return (
    <StyledToolbar>
      <Typography>down(md): red</Typography>
      <Typography>up(md): blue</Typography>
      <Typography>up(lg): green</Typography>
    </StyledToolbar>
  );
}
