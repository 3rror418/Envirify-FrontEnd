import { Box } from '@material-ui/core'
import React from 'react'
import { BookingCard } from './BookingCard';

export const BookingResult = (props) => {
    return (
        <div>
            <Box justifyContent="center"
                alignItems="flex-start"
                display="flex"
                >
                {props.items.map(item => (
                    <BookingCard showReservation={props.showReservation}
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
    )
}
