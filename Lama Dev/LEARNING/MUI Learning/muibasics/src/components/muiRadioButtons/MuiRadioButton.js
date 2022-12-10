import {
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  Radio,
  Typography,
  FormHelperText,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useState } from "react";
function MuiRadioButton() {
  const [value, setvalue] = useState("");
  const handlechange = (e) => {
    setvalue(e.target.value);
  };
  return (
    <Box>
      <Typography variant="h3">Here is defined the Radio buttons</Typography>
      <FormControl id="job-exp-group-label">
        <FormLabel>Years of Experience</FormLabel>
        <RadioGroup
          name="job-experience-group"
          aria-labelledby="job-exp-group-label"
          row
          value={value}
          onChange={handlechange}
        >
          <FormControlLabel control={<Radio />} label="0-2" value="0-2" />
          <FormControlLabel control={<Radio />} label="3-5" value="3-5" />
          <FormControlLabel control={<Radio />} label="6-10" value="6-10" />
        </RadioGroup>
        <FormHelperText>{value} years of experience</FormHelperText>
      </FormControl>
    </Box>
  );
}

export default MuiRadioButton;
