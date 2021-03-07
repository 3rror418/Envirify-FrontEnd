import React from 'react';
import { PlaceResults } from './PlaceResults';

export const PlacesList = (props) => {

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

    return (
        <>
            <h3 className="user-details-title">Your Places</h3>
            <PlaceResults showReservation={true} items={items} showOwner={false} showEdit/>
        </>
    );
};