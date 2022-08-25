import * as React from 'react';
// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import { CardActionArea } from '@mui/material';
// const bull = (
//     <Box
//         component="span"
//         sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//     >
//         •
//     </Box>
// );


export default function OutlinedCard(props) {
    return (
        <>
        <div id={props.divId} onClick={props.handleChange}
         className={(props.active===props.divId)?`selectedDiv device`:`device`}>
    <div className="content">

    <div style={{marginLeft:"20px"}} className={(props.active===props.divId)?`checkbox devCheck checked`:` devCheck checkbox`}>
            {/* <CheckIcon   class={(props.active===props.divId)?`marked`:`Notmarked`} style={{fontSize:"1rem" }} ></CheckIcon> */}
            {/* <FontAwesomeIcon class={(props.active===props.divId)?`marked`:`Notmarked`} style={{fontSize:"1rem" }} icon="fa-solid fa-check" /> */}
           <div className={(props.active===props.divId)?`marked `:`Notmarked`} style={{fontSize:"1rem",textAlign:"center" }}>
            <i className={`fa-solid fa-check`}></i>
           </div>
          </div>
        <div className={(props.active===props.divid)?`info `:`info`}   >
            <p  className={`title`}>{props.devices}</p>
            <p className={`description`}>{props.description}
            </p>
        </div>
    </div>
    <div className="pricing ">
        <p className={`price `}>
           {props.price}<span>€</span>/{props.duration}
        </p>
       
    </div>
</div>
        </>
    );
}
