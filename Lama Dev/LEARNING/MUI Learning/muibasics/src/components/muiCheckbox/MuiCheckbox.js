import {
  Typography,
  Checkbox,
  FormControlLabel,
  FormControl,
  FormLabel,
  FormGroup,
} from "@mui/material";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
import { Box } from "@mui/system";
import React from "react";
import { useState } from "react";
function MuiCheckbox() {
  const [accept, setAccept] = useState(false);
  const [bookmark, setBookmark] = useState(false);
  const [skills, setSkills] = useState([]);

  const handleChange = (e) => {
    setAccept(e.target.checked);
  };

  const handleBookmark = (e) => {
    setBookmark(e.target.checked);
  };

  const handleSkills = (e) => {
    const index = skills.indexOf(e.target.value);
    // The indexOf() method returns -1 if the value is not found. The indexOf() method is case sensitive.
    if (index === -1) {
      setSkills([...skills, e.target.value]);
    } else {
      // This is done so that on again clicking the checkbox the value can be removed using the filter method so it returns and Array without the selected value of checkbox
      setSkills(skills.filter((skills) => skills !== e.target.value));
    }
  };

  return (
    <Box>
      <Box>
        <Typography variant="h6">Here is a checkbox component</Typography>
        <FormControlLabel
          label="I accept terms and conditions"
          control={<Checkbox checked={accept} onChange={handleChange} />}
        />
      </Box>
      <Box>
        <Typography variant="h6">
          Here is a checkbox component with an Icon
        </Typography>
        <FormControlLabel
          label="Book mark this post"
          control={
            <Checkbox
              icon={<BookmarkBorderIcon />}
              checkedIcon={<BookmarkAddedIcon />}
              checked={bookmark}
              onChange={handleBookmark}
            />
          }
        />
      </Box>
      <Box>
        <Typography variant="h6">Checkbox group</Typography>
        <FormControl>
          <FormLabel>Skills</FormLabel>
          <FormGroup row>
            <FormControlLabel
              label="HTML"
              value="HTML"
              control={
                <Checkbox
                  checked={skills.includes("HTML")}
                  onChange={handleSkills}
                />
              }
            />
            <FormControlLabel
              label="CSS"
              value="CSS"
              control={
                <Checkbox
                  checked={skills.includes("CSS")}
                  onChange={handleSkills}
                />
              }
            />
            <FormControlLabel
              label="JavaScript"
              value="JavaScript"
              control={
                <Checkbox
                  checked={skills.includes("JavaScript")}
                  onChange={handleSkills}
                />
              }
            />
          </FormGroup>
        </FormControl>
      </Box>
    </Box>
  );
}

export default MuiCheckbox;
