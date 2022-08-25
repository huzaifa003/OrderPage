import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);


export default function OutlinedCard(props) {
    return (
        <Box sx={{ minWidth: 275 }}>
            <CardActionArea>
            <Card variant="outlined">
                <React.Fragment>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            No Of Device(s)
                        </Typography>
                        <Typography variant="h5" component="div">
                            {props.noOfDevice} Devices
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            Price: {`+$${props.price}` } {bull}
                        </Typography>
                        <Typography variant="body2">
                            Enjoy and Use on
                            <br />
                            {`${props.noOfDevice} of your devices`}
                        </Typography>
                    </CardContent>
            
                </React.Fragment>

            </Card>
            </CardActionArea>
        </Box>
    );
}
