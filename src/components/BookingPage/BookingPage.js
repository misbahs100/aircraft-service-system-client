import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router-dom';
import Seats from '../Seats/Seats'

const BookingPage = () => {
    const { ticketType } = useParams();
    const [places, setPlaces] = useState({})

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        places.source = data.source;
        places.destination = data.destination;
        setPlaces(places);
    }

    return (
        <div className="bg-light">
            <Navbar />
            <div className="card container mt-5 p-4">
                <h2>Please add your source and destination</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("source", { required: true })} placeholder="your source" />
                    {errors.source && <span className="text-danger">This field is required</span>}
                    <br /><br />

                    <input {...register("destination", { required: true })} placeholder="your destination" />
                    {errors.destination && <span className="text-danger">This field is required</span>}
                    <br /><br />

                    <button type="submit" className="btn btn-warning">Submit</button>
                </form>
            </div>

            {/* seats */}
            <Seats ticketType={ticketType} places={places}></Seats>
        </div>
    );
};

export default BookingPage;