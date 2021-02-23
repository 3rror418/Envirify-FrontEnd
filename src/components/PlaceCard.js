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
import Swal from 'sweetalert2'

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

export const PlaceCard = (props) => {

    const classes = useStyles();

    const handleDelete =()=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {

              Swal.fire(
                'Deleted!',
                'Your lodging has been deleted.',
                'success'
              ).then(function(){
                window.location.href="/profile"
            })
            }
          })
    }


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
                            <Typography color="textSecondary" gutterBottom>
                                {props.description}
                            </Typography>
                            {props.showOwner && <Typography gutterBottom>
                                {"Dueño: " + props.owner}
                            </Typography>}
                            {props.showEdit && <Button variant="contained" style={{marginTop:"10px", marginRight:"10px"}} color="primary" onClick={event => window.location.href='/update'}>
                                Edit
                            </Button>}

                            {props.showEdit &&  <Button variant="contained" color="primary" style={{marginTop:"10px"}} onClick={handleDelete} >
                                Delete
                            </Button>}

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