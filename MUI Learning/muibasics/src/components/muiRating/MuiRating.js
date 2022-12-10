import { Box, Rating, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { useState } from "react";
function MuiRating() {
  const [value, setValue] = useState(null);
  return (
    <Box>
      <Typography variant="h6">Rate my Coding</Typography>
      <Stack>
        <Rating
          value={value}
          onChange={(e) => {
            setValue(Number(e.target.value));
          }}
          precision={0.5}
        />
      </Stack>
    </Box>
  );
}

export default MuiRating;
