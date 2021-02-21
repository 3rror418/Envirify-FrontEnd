import React from 'react'
import Swal from 'sweetalert2'
import { Form } from './Form';

export const FormUpdate = () => {
    const mock = {
        name: "Cabaña A",
        city: "Ubate",
        departament: "Cundinamarca",
        calification: 3.5,
        description: "Una bonita cabaña de madera con un cuarto y un baño.",
        direction: "km 5 ubate finca la milagrosa"
    };

    const handleClick = () => {
        Swal.fire({
            title: 'Confirm',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, update it!'
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = "/profile"
            }
        })
    }

    return (
        <div>
            <Form mockInfo={mock} handleOnClick={handleClick} nameButton="Update" ></Form>
        </div>
    )
}
