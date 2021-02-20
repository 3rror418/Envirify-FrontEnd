import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Rating from '@material-ui/lab/Rating';
import Avatar from '@material-ui/core/Avatar';
import {ReservationModal} from './ReservationModal';
import { Navbar } from './global-components/navbar';
import { Footer_v1 } from './global-components/footer';

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
            <div >
                <CssBaseline />
                <div className="video-area tp-video-area pd-top-110">
                    <div className="container viaje-go-top">
                        <div className="row">
                            <div className="col-xl-5 col-lg-6 align-self-center wow animated fadeInRight" data-wow-duration="1s" data-wow-delay="0.3s">
                                <div className="section-title mb-lg-0 mb-4 text-center text-lg-left">
                                    <h2 className="title">{mockInfo.name}</h2>
                                    <h3>{mockInfo.city + ", " + mockInfo.departament}</h3>
                                    <Typography variant="h4">Calification: <Rating
                                        name="calification"
                                        value={mockInfo.calification}
                                        precision={0.5}
                                        size="large"
                                        readOnly
                                    /></Typography>
                                    <Typography variant="h4">Description:</Typography>
                                    <Typography variant="h5">{mockInfo.description}</Typography>
                                    <Typography variant="h4">Owner:</Typography>
                                    <Typography variant="h5">{mockInfo.owner}</Typography>
                                    <br></br>
                                    <ReservationModal />
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-6 offset-xl-1 wow animated fadeInLeft" data-wow-duration="1s" data-wow-delay="0.3s">
                                <div className="video-popup-wrap">
                                    <div>
                                        <Avatar variant="square"
                                            style={{ width: "500px", height: "400px" }}
                                            src="https://a0.muscache.com/pictures/0c0fb5c1-8480-4561-baec-d3b1d913cbf9.jpg" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    let publicUrl = process.env.PUBLIC_URL + '/';

    return (
        <div>
            <Navbar />
            {PlaceInformation}
            <br></br>
            <Footer_v1 />
        </div>
    );
};