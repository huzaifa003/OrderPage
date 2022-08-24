import React, { useState, useEffect } from 'react';
import { AppBar, Typography, Toolbar } from '@mui/material';

const Header = ()=>{
    let bgColor=getComputedStyle(document.documentElement).getPropertyValue("--backgroundColor");
    return (
        <React.Fragment>
            <AppBar style={{zIndex:'1'}} position = 'fixed' sx= {{background: bgColor}}>
                <Toolbar>
                    
                </Toolbar>
            </AppBar>
        </React.Fragment>
    )
}

export default Header