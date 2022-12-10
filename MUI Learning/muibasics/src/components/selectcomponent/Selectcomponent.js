import { MenuItem, TextField, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";
import { useState } from "react";

function Selectcomponent() {
  const [country, setcountry] = useState("");
  const [countries, setcountries] = useState([]);
  const handlechange = (e) => {
    setcountry(e.target.value);
  };
  const multiselect = (e) => {
    setcountries([...e.target.value]);
  };
  return (
    <Stack spacing={3}>
      <Box width={250}>
        <TextField
          label="select country"
          fullWidth
          variant="standard"
          select
          value={country}
          onChange={handlechange}
        >
          <MenuItem value="In">India</MenuItem>
          <MenuItem value="US">USA</MenuItem>
          <MenuItem value="UK">United Kingdom</MenuItem>
        </TextField>
      </Box>
      <Typography variant="h3"> Now lets try multi select option</Typography>
      <Box width={250}>
        <TextField
          variant="standard"
          value={countries}
          select
          SelectProps={{ multiple: true }}
          fullWidth
          onChange={multiselect}
        >
          <MenuItem value="In">India</MenuItem>
          <MenuItem value="US">USA</MenuItem>
          <MenuItem value="UK">United Kingdom</MenuItem>
        </TextField>
      </Box>
    </Stack>
  );
}

export default Selectcomponent;
