import React, { useState, useEffect } from 'react';
import { AppBar, Typography, Toolbar } from '@mui/material';

const Header = ()=>{
    let bgColor=getComputedStyle(document.documentElement).getPropertyValue("--backgroundColor");
    return (
        <React.Fragment>
            <AppBar id = 'navbar' style={{zIndex:'1', top:'-70px'}} position = 'fixed' sx= {{background: bgColor}}>
                <Toolbar>
                    
                </Toolbar>
            </AppBar>
        </React.Fragment>
    )
}

export default Header