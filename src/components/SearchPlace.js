import React from 'react';
import Typography from '@material-ui/core/Typography';
import { PlaceResults } from './PlaceResults';
import { Navbar } from './global-components/navbar';
import { Page_header } from './global-components/page-header';
import { Footer_v1 } from './global-components/footer';

export const SearchPlace = (props) => {

    const items = [{
        id: 1,
        name: "Cabaña A",
        city: "Ubate",
        departament: "Cundinamarca",
        calification: 3.5,
        description: "Una bonita cabaña de madera con un cuarto y un baño.",
        owner: "Pepe Gomez"
    }, {
        id: 2,
        name: "Cabaña B",
        city: "Fuquene",
        departament: "Cundinamarca",
        calification: 2.5,
        description: "Una bonita cabaña de madera con dos cuartos y un baño.",
        owner: "Pepe Gomez"
    }, {
        id: 3,
        name: "Casa",
        city: "San Gil",
        departament: "Santander",
        calification: 3.2,
        description: "Casa de Marmol con cuatro cuartos y tres baños.",
        owner: "Pepe Gomez"
    }];

    const getParameterByName = (name) => {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&#]" + name + "=([^&#]*)"),
            results = regex.exec(window.location.href);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }

    const place = getParameterByName("value");

    let resultComponent = (
        <Typography variant="h4">
            No results Found!
        </Typography>
    );

    let itemResults = [];

    if (place !== "") {
        itemResults = items.filter(item => item.city === place || item.departament === place);
    }

    if (itemResults.length > 0) {
        resultComponent = (<PlaceResults items={itemResults} />);
    }

    return (
        <div>
            <Navbar />
            <Page_header HeaderTitle={"Results for: "+place}  />
            <br></br>
            <br></br>
            {resultComponent}
            <Footer_v1 />
        </div>
    );
};