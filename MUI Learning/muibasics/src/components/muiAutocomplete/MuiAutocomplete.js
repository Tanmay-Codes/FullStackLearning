import { Autocomplete, TextField, Stack, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";

const skills = ["hTML", "CSS", "React", "JavaScript", "Python", ""];

const skillsOptions = skills.map((skill, index) => ({
  id: index + 1,
  label: skill,
}));

function MuiAutocomplete() {
  const [value, setValue] = useState("");
  const [skill, setSkill] = useState(null);
  //   console.log(value);
  //   console.log(skill);
  return (
    <Stack spacing={2} width="250px">
      <Typography variant="h6">This is a Autocomplete example</Typography>
      <Autocomplete
        options={skills}
        value={value}
        onChange={(e, newvalue) => setValue(newvalue)}
        renderInput={(params) => <TextField {...params} label="Skills" />}
        freeSolo
      />
      <Autocomplete
        options={skillsOptions}
        value={skill}
        onChange={(e, newvalue) => setSkill(newvalue)}
        renderInput={(params) => <TextField {...params} label="Skills" />}
      />
    </Stack>
  );
}

export default MuiAutocomplete;
