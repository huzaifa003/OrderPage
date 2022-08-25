import React from 'react'
import Box from '@mui/material/Box';
import FullWidthTabs from "./TabPanel";
import Devices from './Devices'
import Label from './Label'
const Layout = () => {

let bgColor=getComputedStyle(document.documentElement).getPropertyValue("--panelbgColor");
//let PanelBgColor=getComputedStyle(document.documentElement).getPropertyValue("--panelbgColor");

    return (
        <>
               <Box  sx={{  margin: '5%', marginTop: '10%' }} >
                <br></br>
                <br></br>
               {/* Categories */}
               {/* <Typography sx={{color: 'white'}} variant = 'h2'>Select A Plan</Typography> */}
              
              <div>
               <FullWidthTabs bgColor={"transparent"} barColor={bgColor} ></FullWidthTabs>
               <br></br>
               </div>
               <Label no = {2} text = {'Choose the No of Devices'}/>
               <br></br>
               <br></br>
               
              <Devices></Devices>
               </Box>
        
           


          

        </>

    )
}

export default Layout
