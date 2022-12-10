import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";
import { useState } from "react";

function MuiAccordian() {
  const [expanded, setExpanded] = useState(false);
  const handlechange = (isexpanded, panel) => {
    setExpanded(isexpanded ? panel : false);
  };
  return (
    <>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={(e, isexpanded) => handlechange(isexpanded, "panel1")}
      >
        <AccordionSummary
          id="panel1-header"
          aria-controls="panel1-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Something here a random text that shows something to do with the
            react library i am just ytyping randoly ntajkan yandklojng
            sonmething oabout nathe treacht tiahlkdsofi as nlaksnfoijs aklsj
            flasf l;mf ajsf ls;jli klnsa ff;
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={(e, isexpanded) => handlechange(isexpanded, "panel2")}
      >
        <AccordionSummary
          id="panel2-header"
          aria-controls="panel2-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Something here a random text that shows something to do with the
            react library i am just ytyping randoly ntajkan yandklojng
            sonmething oabout nathe treacht tiahlkdsofi as nlaksnfoijs aklsj
            flasf l;mf ajsf ls;jli klnsa ff;
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={(e, isexpanded) => handlechange(isexpanded, "panel3")}
      >
        <AccordionSummary
          id="panel3-header"
          aria-controls="panel3-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Accordion 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Something here a random text that shows something to do with the
            react library i am just ytyping randoly ntajkan yandklojng
            sonmething oabout nathe treacht tiahlkdsofi as nlaksnfoijs aklsj
            flasf l;mf ajsf ls;jli klnsa ff;
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
}

export default MuiAccordian;
