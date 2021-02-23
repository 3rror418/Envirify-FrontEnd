import React from 'react';
import { makeStyles, Rating } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';



const useStyles = makeStyles((theme) => ({
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



export const ReviewCard = (props) => {

    const classes = useStyles();


    return (
        <div>
            <Card className={classes.root}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe" >
                            R
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title={props.review.author}
                    subheader={props.review.date}
                />
                <CardMedia
                    className={classes.media}
                    image="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Valverde_de_los_Arroyos_-_005_%2830676059446%29.jpg/1200px-Valverde_de_los_Arroyos_-_005_%2830676059446%29.jpg"
                    title={props.name}
                />

                <CardContent>
                    <Rating
                        name="calification"
                        value={props.review.calification}
                        precision={0.5}
                        readOnly
                    />
                    <Typography variant="body2" color="textSecondary">
                        {props.review.message}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                </CardActions>
            </Card>
        </div>
    );
}
