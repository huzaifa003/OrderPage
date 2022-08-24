import React from 'react'
import Box from '@mui/material/Box';
import FullWidthTabs from "./TabPanel";
const Layout = () => {

let bgColor=getComputedStyle(document.documentElement).getPropertyValue("--backgroundColor");
let PanelBgColor=getComputedStyle(document.documentElement).getPropertyValue("--panelbgColor");

    return (
        <>
               <Box  sx={{  margin: '5%', marginTop: '10%' }} >
              
               {/* Categories */}
               <FullWidthTabs bgColor={PanelBgColor} barColor={bgColor} ></FullWidthTabs>

               </Box>
        
           


          

        </>

    )
}

export default Layout
