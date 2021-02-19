import React from 'react';
import { Typography } from '@material-ui/core';
import { PlaceResults } from './PlaceResults';

export const SearchPlace = (props) => {

    const items = [{
        name: "Cabaña A",
        city: "Ubate",
        departament: "Cundinamarca",
        calification: 3.5,
        description: "Una bonita cabaña de madera con un cuarto y un baño.",
        owner: "Pepe Gomez"
    }, {
        name: "Cabaña B",
        city: "Fuquene",
        departament: "Cundinamarca",
        calification: 2.5,
        description: "Una bonita cabaña de madera con dos cuartos y un baño.",
        owner: "Pepe Gomez"
    }, {
        name: "Casa",
        city: "San Gil",
        departament: "Santander",
        calification: 3.2,
        description: "Casa de Marmol con cuatro cuartos y tres baños.",
        owner: "Pepe Gomez"
    }];

    const getParameterByName = (name) => {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(window.location.search);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }

    const place = getParameterByName("value");

    let resultComponent = (
        <Typography variant="h4">
            No results Found!
        </Typography>
    );

    let results = [];

    if (place !== "") {
        results = items.filter(item => item.city === place || item.departament === place);
    }

    if (results.length > 0) {
        resultComponent = (<PlaceResults items={results} />);
    }

    return (
        <div>
            <Typography style={{ textAlign: "left" }} variant="h3">
                Results for: {place}
            </Typography>
            <br></br>
            {resultComponent}
        </div>
    );
};