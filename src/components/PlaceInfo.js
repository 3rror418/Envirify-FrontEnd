import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Rating from '@material-ui/lab/Rating';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(8)
        }
    },
}));

export const PlaceInfo = (props) => {

    const classes = useStyles();

    const mockInfo = {
        name: "Cabaña A",
        city: "Ubate",
        departament: "Cundinamarca",
        calification: 3.5,
        description: "Una bonita cabaña de madera con un cuarto y un baño.",
        owner: "Pepe Gomez"
    };

    const getParameterByName = (name) => {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(window.location.href);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }

    const id = getParameterByName("id");

    let PlaceInformation = (
        <Typography variant="h4">
            There is no place!
        </Typography>
    );

    if (id !== "") {
        const placeId = parseInt(id);
        //AQUI SE BUSCARIA LA INFORMACION DEL LUGAR CON EL PLACE ID, EN VEZ DE USAR MOCK INFO.
        PlaceInformation = (
            <div style={{ border: "5px solid #000" }}>
                <CssBaseline />
                <main className="layout">
                    <Paper className="paper">
                        <Typography variant="h2">{mockInfo.name}</Typography>
                        <Typography variant="h3">{mockInfo.city + ", " + mockInfo.departament}</Typography>
                        <div className={classes.root}>
                            <Avatar variant="square"
                                style={{ width: "400px", height: "400px" }}
                                src="https://a0.muscache.com/pictures/0c0fb5c1-8480-4561-baec-d3b1d913cbf9.jpg" />
                            <div>
                                <Typography variant="h4">Calification:</Typography>
                                <Rating
                                    name="calification"
                                    value={mockInfo.calification}
                                    precision={0.5}
                                    size="large"
                                    readOnly
                                />
                                <Typography variant="h4">Description:</Typography>
                                <Typography variant="h5">{mockInfo.description}</Typography>
                                <Typography variant="h4">Owner:</Typography>
                                <Typography variant="h5">{mockInfo.owner}</Typography>
                            </div>

                        </div>
                        <Button variant="contained" color="primary">
                            Make Reservation
                        </Button>
                    </Paper>
                </main>
            </div>
        );
    }

    return (
        <div>
            {PlaceInformation}
        </div>
    );
};