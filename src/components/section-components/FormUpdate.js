import React, { useState } from 'react'
import Swal from 'sweetalert2'

export const FormUpdate = () => {
    const mockInfo = {
        name: "Cabaña A",
        city: "Ubate",
        departament: "Cundinamarca",
        calification: 3.5,
        description: "Una bonita cabaña de madera con un cuarto y un baño.",
        direction: "km 5 ubate finca la milagrosa"
    };

    const [name, setname] = useState(mockInfo.name)
    const [department, setdepartment] = useState(mockInfo.departament)
    const [city, setcity] = useState(mockInfo.city)
    const [habitations, sethabitations] = useState(0)
    const [bath, setbath] = useState(0)
    const [capacity, setcapacity] = useState(0)
    const [description, setdescription] = useState(mockInfo.description)
    const [direction, setdirection] = useState(mockInfo.direction)

    const handleNameChange = (e) => {
        setname(e.target.value)
    }

    const handleDepartmentChange = (e) => {
        setdepartment(e.target.value)
    }

    const handleCityChange = (e) => {
        setcity(e.target.value)
    }

    const handleDirectionChange = (e) => {
        setdirection(e.target.value)
    }

    const handleHabitationsChange = (e) => {
        sethabitations(e.target.value)
    }

    const handleBathChange = (e) => {
        setbath(e.target.value)
    }

    const handleCapacityChange = (e) => {
        setcapacity(e.target.value)
    }

    const handleDescriptionChange = (e) => {
        setdescription(e.target.value)
    }

    const handleSubmit = () => {
        //e.preventDefault()
        setname('')
        setdescription('')
        setdepartment('')
        setcapacity(0)
        setcity('')
        sethabitations(0)
        setbath(0)
        setdirection('')
    }


    const handleOnClick = () => {
        Swal.fire({
            title: 'Confirm',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, update it!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Update!',
                    'Your lodging has been updated',
                    'success'
                )
                handleSubmit()
            }
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
                                <input type="text" value={name} onChange={handleNameChange} />
                            </label>
                        </div>
                        <div className="col-md-6">
                            <label className="single-input-wrap style-two">
                                <span className="single-input-title">Department</span>
                                <input type="text" value={department} onChange={handleDepartmentChange} />
                            </label>
                        </div>
                        <div className="col-md-6">
                            <label className="single-input-wrap style-two">
                                <span className="single-input-title">City</span>
                                <input type="text" value={city} onChange={handleCityChange} />
                            </label>
                        </div>
                        <div className="col-md-6">
                            <label className="single-input-wrap style-two">
                                <span className="single-input-title">Direction</span>
                                <input type="text" value={direction} onChange={handleDirectionChange} />
                            </label>
                        </div>
                        <div className="col-md-4">
                            <label className="single-input-wrap style-two">
                                <span className="single-input-title">Capacity</span>
                                <input type="number" value={capacity} onChange={handleCapacityChange} />
                            </label>
                        </div>
                        <div className="col-md-4">
                            <label className="single-input-wrap style-two">
                                <span className="single-input-title"># Habitations</span>
                                <input type="number" value={habitations} onChange={handleHabitationsChange} />
                            </label>
                        </div>
                        <div className="col-md-4">
                            <label className="single-input-wrap style-two">
                                <span className="single-input-title"># Bathrooms</span>
                                <input type="number" value={bath} onChange={handleBathChange} />
                            </label>
                        </div>
                        <div className="col-lg-12">
                            <label className="single-input-wrap style-two">
                                <span className="single-input-title">Description</span>
                                <textarea value={description} onChange={handleDescriptionChange} />
                            </label>
                        </div>
                    </div>
                </form>

                <div style={{ textAlign: "center" }}>
                    <div style={{ width: "50%", display: "inline-block", textAlign: "left" }}>
                        <button className="btn btn-yellow mt-3 text-center" onClick={handleOnClick}>Update</button>
                    </div>
                </div>

            </div>

        </div>
    )
}
