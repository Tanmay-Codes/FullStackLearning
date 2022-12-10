import { Link, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

function MuiLink() {
  return (
    <Stack spacing={2} direction="row" m={4}>
      <Link href="#">Link</Link>
      <Link href="#" color="secondary">
        Secondary
      </Link>
      <Link href="#" color="secondary" underline="none">
        Secondary without underline
      </Link>
      <Typography variant="h6">
        <Link href="#" color="secondary" underline="none">
          Secondary without underline and typography h6
        </Link>
      </Typography>
    </Stack>
  );
}

export default MuiLink;
