import { Box, Breadcrumbs, Link } from "@mui/material";
import React from "react";

function MUIBreadcrumbs() {
  return (
    <Box m={2}>
      <Breadcrumbs aria-label="breadcrumbs" separator=">">
        <Link underline="hover" href="#">
          Home
        </Link>
        <Link underline="hover" href="#">
          sevice
        </Link>
        <Link underline="hover" href="#">
          example
        </Link>
      </Breadcrumbs>
    </Box>
  );
}

export default MUIBreadcrumbs;
