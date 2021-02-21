import React from 'react';
import Box from '@material-ui/core/Box';
import { PlaceCard } from './PlaceCard';


export const PlaceResults = (props) => {

    return (
        <div >
            <Box justifyContent="center"
                alignItems="flex-start"
                display="flex"
                >
                {props.items.map(item => (
                    <PlaceCard
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        city={item.city}
                        departament={item.departament}
                        calification={item.calification}
                        description={item.description}
                        owner={item.owner} 
                        showOwner={props.showOwner}
                        showEdit={props.showEdit}/>
                ))}
            </Box>
        </div>
    );
};