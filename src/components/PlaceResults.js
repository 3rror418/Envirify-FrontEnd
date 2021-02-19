import React from 'react';
import { Grid } from '@material-ui/core';
import { PlaceCard } from './PlaceCard';


export const PlaceResults = (props) => {

    return (
        <div>
            <Grid container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={5}>
                {props.items.map(item => (
                    <PlaceCard
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        city={item.city}
                        departament={item.departament}
                        calification={item.calification}
                        description={item.description}
                        owner={item.owner} />
                ))}
            </Grid>
        </div>
    );
};