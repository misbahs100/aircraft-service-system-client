import React from 'react';
import Navbar from '../Navbar/Navbar';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router-dom';


const BookingPage = () => {
    const { id } = useParams();

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div>
            <Navbar />
            <h2>Please add your source and destination</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                
                <input {...register("source", { required: true })} placeholder="your source"/>
                {errors.source && <span>This field is required</span>}

                <br /><br />

                <input {...register("destination", { required: true })} placeholder="your destination"/>
                {errors.destination && <span>This field is required</span>}
                
                <br /><br />

                

                <button type="submit">submit</button>
            </form>

        </div>
    );
};

export default BookingPage;