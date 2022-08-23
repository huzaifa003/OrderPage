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
  const [active, setActive] = React.useState(true);
  const clickHandler = () => {
    setActive(() => {
      return !active;
    });
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
            <div onClick={clickHandler}
              // selected selectedDiv
              className={!active ? `product ` : `product selected selectedDiv`}>
              <PriceCard lastSold="84" days="1" type="Month" price='50' currency='£' billingCycle="Month" saving="20" ></PriceCard>
            </div>

            <div onClick={clickHandler}
              // selected selectedDiv
              className={!active ? `product ` : `product selected selectedDiv`}>
              <PriceCard lastSold="84" days="1" type="Month" price='50' currency='£' billingCycle="Month" saving="20" ></PriceCard>
            </div>
            <div onClick={clickHandler}
              // selected selectedDiv
              className={!active ? `product ` : `product selected selectedDiv`}>
              <PriceCard lastSold="84" days="1" type="Month" price='50' currency='£' billingCycle="Month" saving="20" ></PriceCard>
            </div>
            <div onClick={clickHandler}
              // selected selectedDiv
              className={!active ? `product ` : `product selected selectedDiv`}>
              <PriceCard lastSold="84" days="1" type="Month" price='50' currency='£' billingCycle="Month" saving="20" ></PriceCard>
            </div>

          </Box>
        </TabPanel>
        <TabPanel className="tabPanel" value={value} index={1} dir={theme.direction}>
          <Box className='Packages-Container '>

            <div onClick={clickHandler}
              // selected selectedDiv
              className={!active ? `product ` : `product selected selectedDiv`}>
              <PriceCard lastSold="84" days="1" type="Month" price='50' currency='£' billingCycle="Month" saving="20" ></PriceCard>
            </div>

            <div onClick={clickHandler}
              // selected selectedDiv
              className={!active ? `product ` : `product selected selectedDiv`}>
              <PriceCard lastSold="84" days="1" type="Month" price='50' currency='£' billingCycle="Month" saving="20" ></PriceCard>
            </div>


          </Box>


        </TabPanel>
        <TabPanel className="tabPanel" value={value} index={2} dir={theme.direction}>
          <Box className='Packages-Container '>

            <div onClick={clickHandler}
              // selected selectedDiv
              className={!active ? `product ` : `product selected selectedDiv`}>
              <PriceCard lastSold="84" days="1" type="Month" price='50' currency='£' billingCycle="Month" saving="20" ></PriceCard>
            </div>

            <div onClick={clickHandler}
              // selected selectedDiv
              className={!active ? `product ` : `product selected selectedDiv`}>
              <PriceCard lastSold="84" days="1" type="Month" price='50' currency='£' billingCycle="Month" saving="20" ></PriceCard>
            </div>
            <div onClick={clickHandler}
              // selected selectedDiv
              className={!active ? `product ` : `product selected selectedDiv`}>
              <PriceCard lastSold="84" days="1" type="Month" price='50' currency='£' billingCycle="Month" saving="20" ></PriceCard>
            </div>


          </Box>
        </TabPanel>
        {/* you can add more panels */}
      </SwipeableViews>

    </Box>
  );
}
