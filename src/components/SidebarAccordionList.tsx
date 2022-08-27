import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@mui/material';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import React from 'react';

const SidebarAccordionList = () => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ArrowDropUpIcon />}
        aria-controls='panel1a-content'
        id='panel1a-header'
      >
        <Typography>Accordion 1</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default SidebarAccordionList;
