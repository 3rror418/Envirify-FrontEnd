import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 500,
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

    return (
        <div>
            <Grid item xs={10}>
                <Link to={"/place?id=" + props.id}>
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
                            <Typography gutterBottom>
                                {"Dueño: " + props.owner}
                            </Typography>
                        </CardContent>
                    </Card>
                </Link>

            </Grid>
        </div>
    );
};