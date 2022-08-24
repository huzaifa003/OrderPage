import React from 'react'
import Box from '@mui/material/Box';
import FullWidthTabs from "./TabPanel";
import { Typography } from '@mui/material';
import Label from './Label';

const Layout = () => {

let bgColor=getComputedStyle(document.documentElement).getPropertyValue("--backgroundColor");
let PanelBgColor=getComputedStyle(document.documentElement).getPropertyValue("--panelbgColor");

    return (
        <>
               <Box  sx={{  margin: '5%', marginTop: '10%' }} >
                <br></br>
                <br></br>
               {/* Categories */}
               {/* <Typography sx={{color: 'white'}} variant = 'h2'>Select A Plan</Typography> */}
               <Label></Label>
               <br></br>
               <br></br>
               <FullWidthTabs bgColor={PanelBgColor} barColor={bgColor} ></FullWidthTabs>

               </Box>
        
           


          

        </>

    )
}

export default Layout
