import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DevicesCard from './DevicesCard'
import Grid from '@mui/material/Grid';

export default function SimpleAccordion() {
  const [activatedId, setactivatedId] = React.useState('d1');
  const clickHandler = (id) => {
    console.log(activatedId)
    const element_prev = document.getElementById(activatedId);

    const element = document.getElementById(id);

    if (element_prev === null) {
      setactivatedId(id);
      element.classList.add('selectedDiv')
    } else {
      element_prev.classList.remove('selectedDiv');
      setactivatedId(id);
      element.classList.add('selectedDiv')
    }


  }
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography> Devices</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid sx={{ flexGrow: 1 }} container spacing={2}>
            <Grid item xs={12}>
              <Grid container justifyContent="left" spacing={2}>

                <Grid key={0} item>
                  <div onClick={() => clickHandler('d1')}>
                    <DevicesCard divId='d1' noOfDevice={1} price={5} activatedId={activatedId}></DevicesCard>
                  </div>
                </Grid>
                <Grid key={1} item>
                  <div onClick={() => clickHandler('d2')} >
                    <DevicesCard divId={'d2'} noOfDevice={2} price={10} activatedId={activatedId}></DevicesCard>
                  </div>
                </Grid>
                <Grid key={2} item>
                  <div onClick={() => clickHandler('d3')}>
                    <DevicesCard divId={'d3'} noOfDevice={3} price={15} activatedId={activatedId}></DevicesCard>
                  </div>
                </Grid>

              </Grid>
            </Grid>
          </Grid>

        </AccordionDetails>
      </Accordion>

    </div>
  );
}
