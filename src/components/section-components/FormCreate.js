import React, { useState } from 'react'
import Swal from 'sweetalert2'
import axios from 'axios'


export const FormCreate = () => {

    const [place, setplace] = useState({
        name: "",
        department: "",
        city: "",
        direction: "",
        description: "",
        urlImage: "",
        capacity: 0,
        habitations: 0,
        bathrooms: 0
    })

    const headers = {
        'X-Email': localStorage.getItem("emailUser")
    }


    const handleChange = (e) => {
        const { name, value } = e.target;
        let newPlace = { ...place, [name]: value }
        console.log(value)
        setplace(newPlace)
    }

    const postPlace = (place) => {
        axios.post("https://enfiry-back-end.herokuapp.com/api/v1/places", place, {
            headers: headers
        })
            .then(response => {

                Swal.fire(
                    'Created!',
                    'Your lodging has been created',
                    'success'
                ).then(function () {
                    window.location.href = "/"
                })


            }).catch(error => {
                alert("Fallo de Conexión con DB");
            });
    }

    const onSubmit = (e) => {
        e.preventDefault();

        Swal.fire({
            title: 'Confirm',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, create it!'
        }).then((result) => {
            const url = place.urlImage
            const extension = url.substr(url.lastIndexOf('.') + 1)

            if (result.isConfirmed) {
                if (extension === "png" || extension === "jpg") {
                    postPlace(place)
                }
                else{
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'The url is not a image',
                      })

                }
            }

            

        })

        setplace({
            name: "",
            department: "",
            city: "",
            direction: "",
            description: "",
            urlImage: "",
            capacity: 0,
            habitations: 0,
            bathrooms: 0
        })
    }


    return (
        <div>
            <div style={{ textAlign: "center" }}>
                <form style={{ width: "50%", display: "inline-block", textAlign: "left" }}>
                    <div className="row">
                        <div className="col-md-6">
                            <label className="single-input-wrap style-two">
                                <span className="single-input-title">Name</span>
                                <input type="text" name="name" value={place.name} onChange={handleChange} />
                            </label>
                        </div>
                        <div className="col-md-6">
                            <label className="single-input-wrap style-two">
                                <span className="single-input-title">Department</span>
                                <input type="text" name="department" value={place.department} onChange={handleChange} />
                            </label>
                        </div>
                        <div className="col-md-6">
                            <label className="single-input-wrap style-two">
                                <span className="single-input-title">City</span>
                                <input type="text" name="city" value={place.city} onChange={handleChange} />
                            </label>
                        </div>
                        <div className="col-md-6">
                            <label className="single-input-wrap style-two">
                                <span className="single-input-title">Direction</span>
                                <input type="text" name="direction" value={place.direction} onChange={handleChange} />
                            </label>
                        </div>
                        <div className="col-md-4">
                            <label className="single-input-wrap style-two">
                                <span className="single-input-title">Capacity</span>
                                <input type="number" name="capacity" value={place.capacity} onChange={handleChange} />
                            </label>
                        </div>
                        <div className="col-md-4">
                            <label className="single-input-wrap style-two">
                                <span className="single-input-title"># Habitations</span>
                                <input type="number" name="habitations" value={place.habitations} onChange={handleChange} />
                            </label>
                        </div>
                        <div className="col-md-4">
                            <label className="single-input-wrap style-two">
                                <span className="single-input-title"># Bathrooms</span>
                                <input type="number" name="bathrooms" value={place.bathrooms} onChange={handleChange} />
                            </label>
                        </div>
                        <div className="col-lg-12">
                            <label className="single-input-wrap style-two">
                                <span className="single-input-title">Description</span>
                                <textarea name="description" value={place.description} onChange={handleChange} />
                            </label>
                        </div>
                        <div className="col-lg-12">
                            <label className="single-input-wrap style-two">
                                <span className="single-input-title">Url Image</span>
                                <input type="text" name="urlImage" value={place.urlImage} onChange={handleChange} />
                            </label>
                        </div>
                    </div>
                </form>

                <div style={{ textAlign: "center" }}>
                    <div style={{ width: "50%", display: "inline-block", textAlign: "left" }}>
                        <button className="btn btn-yellow mt-3 text-center" onClick={onSubmit}>Add</button>
                    </div>
                </div>

            </div>

        </div>
    )
}
