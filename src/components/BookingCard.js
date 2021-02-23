import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Rating from '@material-ui/core/Rating';
import { makeStyles } from '@material-ui/core/styles';
import moment from 'moment';

const useStyles = makeStyles((theme) => ({
    root: {
        width:200,
        maxWidth:300
        
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    }
}));

export const BookingCard = (props) => {

    const classes = useStyles();

    const initialDate= moment().toLocaleString().split(' ').slice(1,4).join(' ')
    const finishDate= moment().toLocaleString().split(' ').slice(1,4).join(' ')

   
    return (
        <div>
            <Box m={1} p={1}>
               {/*<Link to={"/place?id=" + props.id}>*/}
                    <Card variant="outlined" className={classes.root} >
                        <CardMedia
                            className={classes.media}
                            image="https://a0.muscache.com/pictures/0c0fb5c1-8480-4561-baec-d3b1d913cbf9.jpg"
                            title={props.name}
                        />
                        <CardHeader
                            title={props.name}
                            subheader={props.city + ", " + props.departament}
                        />
                        <CardContent>
                            <Rating
                                name="calification"
                                value={props.calification}
                                precision={0.5}
                                readOnly
                            />
                           
                            {props.showOwner && <Typography gutterBottom>
                                {"Owner: " + props.owner}
                            </Typography>}

                             <Typography gutterBottom>
                                {`Initial date ${initialDate}`}
                            </Typography>

                           <Typography gutterBottom>
                                {`Finish date ${finishDate}`}
                            </Typography>
                          

                            <Button variant="contained" color="primary" style={{marginTop:"10px"}} onClick={event => window.location.href=`/place?id=${props.id}&&showReservation=${props.showReservation}`}>
                                View
                            </Button>

                        </CardContent>
                    </Card>
               {/* </Link>*/}
            </Box>
        </div>
    );
};