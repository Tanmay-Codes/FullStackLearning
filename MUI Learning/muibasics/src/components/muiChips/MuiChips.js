import { Stack, Avatar, Chip } from "@mui/material";
// import { Stack } from "@mui/system";
import React from "react";
import { useState } from "react";
function MuiChips() {
  const [chips, setChips] = useState(["chip1", "chip2", "chip3"]);
  const handleDelete = (chipToDelete) => {
    setChips((chips) => chips.filter((chip) => chip !== chipToDelete));
  };
  return (
    <Stack direction="row" spacing={1} mt={3}>
      <Chip
        label="Chip outlined"
        color="primary"
        size="small"
        variant="outlined"
      />
      <Chip label="Chip" color="secondary" size="small" />
      <Chip label="Chip" color="secondary" avatar={<Avatar>VS</Avatar>} />
      <Chip
        label="Chip"
        color="secondary"
        size="small"
        onClick={() => alert("clicked")}
        onDelete={() => alert("deleted")}
      />
      {chips.map((chip) => (
        <Chip key={chip} label={chip} onDelete={() => handleDelete(chip)} />
      ))}
    </Stack>
  );
}

export default MuiChips;
