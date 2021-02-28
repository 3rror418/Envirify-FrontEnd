import React from 'react'
import Swal from 'sweetalert2'
import { Form } from './Form';

export const FormCreate = () => {

    const mock = {
        name: "",
        city: "",
        departament: "",
        calification: 0,
        description: "",
        direction: ""
    };

    const handleClick = () => {
        Swal.fire({
            title: 'Confirm',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, create it!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Created!',
                    'Your lodging has been created',
                    'success'
                ).then(function(){
                    window.location.href="/"
                })
            }
        })

    }

    return (
        <div>
            <Form mockInfo={mock} handleOnClick={handleClick} nameButton="Create" ></Form>
        </div>
    )
}
