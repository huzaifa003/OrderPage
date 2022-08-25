import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DevicesCard from './DevicesCard'
import Grid from '@mui/material/Grid';

export default function SimpleAccordion() {


  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid sx={{ flexGrow: 1 }} container spacing={2}>
            <Grid item xs={12}>
              <Grid container justifyContent="left" spacing={2}>
             
                  <Grid key={0} item>
                    <DevicesCard id= {0} noOfDevice = {1} price = {5}></DevicesCard>
                  </Grid>
                  <Grid key={1} item>
                    <DevicesCard id= {1} noOfDevice = {2} price = {10}></DevicesCard>
                  </Grid>
                  <Grid key={2} item>
                    <DevicesCard id= {2} noOfDevice = {3} price = {15}></DevicesCard>
                  </Grid>
          
              </Grid>
            </Grid>
          </Grid>

        </AccordionDetails>
      </Accordion>

    </div>
  );
}
