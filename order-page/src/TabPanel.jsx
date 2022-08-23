import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SwipeableViews from 'react-swipeable-views';
import PriceCard from './PriceCard';


// helping functions 

// functions of bottom panels 
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div style={{ marginTop: "10px" }}
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}
// exportable functions 
export default function FullWidthTabs(props) {
  const [active, setActive] = React.useState(false);
  const [activatedId, setactivatedId] = React.useState('pid1');

  // useEffect(() => {

  // },[]);

  const clickHandler = (id) => {


    const element_prev = document.getElementById(activatedId);
    const element = document.getElementById(id);
    //  element_prev.classList.remove('selected')
    element_prev.classList.remove('selectedDiv');
    setactivatedId(id);
    element.classList.add('selectedDiv')

  }



  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box sx={{ bgcolor: `${props.bgColor}`, width: "100%" }}>
      <AppBar style={{ background: `${props.barColor}` }} position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Trial" {...a11yProps(0)} />
          <Tab label="Subscription" {...a11yProps(1)} />
          <Tab label="Resellers" {...a11yProps(2)} />
          {/* you can add more tabs  */}
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel className="tabPanel" value={value} index={0} dir={theme.direction} >
          <Box className='Packages-Container '>


            <PriceCard handleChange={() => clickHandler('pid1')} active={activatedId} divId="pid1" lastSold="84" days="1" type="Month" price='50' currency='£' billingCycle="Month" saving="20" ></PriceCard>
            <PriceCard handleChange={() => clickHandler('pid2')} active={activatedId} divId="pid2" lastSold="84" days="1" type="Month" price='50' currency='£' billingCycle="Month" saving="20" ></PriceCard>
            <PriceCard handleChange={() => clickHandler('pid3')} active={activatedId} divId="pid3" lastSold="84" days="1" type="Month" price='50' currency='£' billingCycle="Month" saving="20" ></PriceCard>
            <PriceCard handleChange={() => clickHandler('pid4')} active={activatedId} divId="pid4" lastSold="84" days="1" type="Month" price='50' currency='£' billingCycle="Month" saving="20" ></PriceCard>


          </Box>
        </TabPanel>
        <TabPanel className="tabPanel" value={value} index={1} dir={theme.direction}>
          <Box className='Packages-Container '>
            <PriceCard handleChange={() => clickHandler('pid5')} active={activatedId} divId="pid5" lastSold="84" days="1" type="Month" price='50' currency='£' billingCycle="Month" saving="20" ></PriceCard>
            <PriceCard handleChange={() => clickHandler('pid6')} active={activatedId} divId="pid6" lastSold="84" days="1" type="Month" price='50' currency='£' billingCycle="Month" saving="20" ></PriceCard>
            <PriceCard handleChange={() => clickHandler('pid7')} active={activatedId} divId="pid7" lastSold="84" days="1" type="Month" price='50' currency='£' billingCycle="Month" saving="20" ></PriceCard>



          </Box>


        </TabPanel>
        <TabPanel className="tabPanel" value={value} index={2} dir={theme.direction}>
          <Box className='Packages-Container '>

          <PriceCard handleChange={() => clickHandler('pid8')} active={activatedId} divId="pid8" lastSold="84" days="1" type="Month" price='50' currency='£' billingCycle="Month" saving="20" ></PriceCard>
            <PriceCard handleChange={() => clickHandler('pid9')} active={activatedId} divId="pid9" lastSold="84" days="1" type="Month" price='50' currency='£' billingCycle="Month" saving="20" ></PriceCard>
           


          </Box>
        </TabPanel>
        {/* you can add more panels */}
      </SwipeableViews>

    </Box>
  );
}