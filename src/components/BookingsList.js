import React, { useState, useEffect } from 'react'
import { BookingResult } from './BookingResult';
import Swal from 'sweetalert2';
import axios from 'axios';

export const BookingsList = () => {

    let email = localStorage.getItem('emailUser');

    const [lista, setlista] = useState([])

    useEffect(() => {
        axios.get("https://enfiry-back-end.herokuapp.com/api/v1/users/" + email + "/bookings")
            .then(response => {
                let result = response.data;
                let list = [];
                result.forEach(e => list.push(e.place))
                setlista(list);
                console.log(result)
            }).catch(error => {
                Swal.fire({
                    title: 'You do not have bookings!',
                    text: 'Continue',
                    icon: 'error',
                    confirmButtonText: 'Cool'
                });
            });
    }, [])

    return (
        <div>
            <h3 className="user-details-title">Your Bookings</h3>
            <BookingResult items={lista} showReservation={false} showOwner={false} showEdit={false} />
        </div>
    )
}
