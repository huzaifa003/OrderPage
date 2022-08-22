import React from 'react'
import Box from '@mui/material/Box';

const Layout = () => {
let bgColor=getComputedStyle(document.documentElement).getPropertyValue("--backgroundColor");
    return (
        <>
           <div className="Container">

                <Box  sx={{ border: '1px dashed grey', backgroundColor: `${bgColor}`, margin: '5%' }} >
                Arsalan 
                </Box>
           </div>
           
        </>

    )
}

export default Layout
