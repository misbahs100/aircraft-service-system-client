import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import { useForm } from "react-hook-form";
import { Link, useParams } from 'react-router-dom';
import Seats from '../Seats/Seats'


const BookingPage = () => {
    const { ticketType } = useParams();
    const [places, setPlaces] = useState({})

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        // console.log(data);
        places.source = data.source;
        places.destination = data.destination;
        // console.log(places)
    }

    
    return (
        <div>
            <Navbar />
            <div className="card container mt-5">
                <h2>Please add your source and destination</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("source", { required: true })} placeholder="your source" />
                    {errors.source && <span>This field is required</span>}
                    <br /><br />

                    <input {...register("destination", { required: true })} placeholder="your destination" />
                    {errors.destination && <span>This field is required</span>}
                    <br /><br />

                    {/* <Link to={`/seats`}> */}
                        <button type="submit">submit</button>
                    {/* </Link> */}
                </form>
            </div>

            {/* seats */}
            <Seats ticketType={ticketType} places={places}></Seats>
        </div>
    );
};

export default BookingPage;