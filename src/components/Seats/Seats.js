import React, { useEffect, useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import StripePaymentForm from '../StripePaymentForm/StripePaymentForm'
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51IebtOEfLSXh2ldbzYeSMtviCqBvw8YzxhRbhXc265i3Sm6U2KPd15mkawWspI5SKKHTR098dyG37HCBT5Ks8qsA00DWv77nhV');

const red = "bg-danger";
let bg1 = "bg-success";
let bg2 = "bg-success";
let bg3 = "bg-success";
let bg4 = "bg-success";
let bg5 = "bg-success";
let bg6 = "bg-success";
let bg7 = "bg-success";
let bg8 = "bg-success";
let bg9 = "bg-success";
let bg10 = "bg-success";

const Seats = ({ places, ticketType }) => {
    let [ticketCount, setTicketCount] = useState(0);
    const [seats, setSeats] = useState([]);
    let [preSeats, setPreSeats] = useState([]);

    useEffect(() => {
        fetch('https://aircraft-service-system-server.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                data.map(order => {
                    if (order.places.source === places.source && order.places.destination === places.destination) {
                        preSeats = order.seats;
                        setPreSeats(preSeats)
                        console.log(preSeats);
                    }
                }

                )
            })
    }, [])

    const handleSeat = (seatNo) => {
        if (seats.includes(seatNo)) {
            alert("sorry, this seat is choosed before")
        }
        else {
            if (ticketCount <= 4) {
                setTicketCount(++ticketCount);
                seats.push(seatNo);
                setSeats(seats);
            }
            else {
                alert("Sorry, You can order maximum 5 tickets")
            }
        }
    }

    return (
        <div>
            <div className="card mt-5 container p-4">
                <h2>Please choose your seats (maximum 5)</h2>
                <h5>Green seats are available</h5>
                <p>Your seats are: {seats.map(seat => <span>{seat}, </span>)}</p>

                <div className="row">
                    {preSeats.map(preSeat => preSeat === 1 && (bg1 = "bg-danger"))}
                    <div className={`col-md-3 d-flex justify-content-center mx-2 my-2 ${bg1}`} style={{ border: '1px solid black', cursor: 'pointer' }} onClick={() => handleSeat(1)}>
                        1
                    </div>
                    {preSeats.map(preSeat => preSeat === 2 && (bg2 = red))}
                    <div className={`col-md-3 d-flex justify-content-center mx-2 my-2 ${bg2}`} style={{ border: '1px solid black', cursor: 'pointer' }} onClick={() => handleSeat(2)}>
                        2
                    </div>
                    {preSeats.map(preSeat => preSeat === 3 && (bg3 = "bg-danger"))}
                    <div className={`col-md-3 d-flex justify-content-center mx-2 my-2 ${bg3}`} style={{ border: '1px solid black', cursor: 'pointer' }} onClick={() => handleSeat(3)}>
                        3
                    </div>
                    {preSeats.map(preSeat => preSeat === 4 && (bg4 = "bg-danger"))}
                    <div className={`col-md-3 d-flex justify-content-center mx-2 my-2 ${bg4}`} style={{ border: '1px solid black', cursor: 'pointer' }} onClick={() => handleSeat(4)}>
                        4
                    </div>
                    {preSeats.map(preSeat => preSeat === 5 && (bg5 = "bg-danger"))}
                    <div className={`col-md-3 d-flex justify-content-center mx-2 my-2 ${bg5}`} style={{ border: '1px solid black', cursor: 'pointer' }} onClick={() => handleSeat(5)}>
                        5
                    </div>
                    {preSeats.map(preSeat => preSeat === 6 && (bg6 = "bg-danger"))}
                    <div className={`col-md-3 d-flex justify-content-center mx-2 my-2 ${bg6}`} style={{ border: '1px solid black', cursor: 'pointer' }} onClick={() => handleSeat(6)}>
                        6
                    </div>
                    {preSeats.map(preSeat => preSeat === 7 && (bg7 = "bg-danger"))}
                    <div className={`col-md-3 d-flex justify-content-center mx-2 my-2 ${bg7}`} style={{ border: '1px solid black', cursor: 'pointer' }} onClick={() => handleSeat(7)}>
                        7
                    </div>
                    {preSeats.map(preSeat => preSeat === 8 && (bg8 = "bg-danger"))}
                    <div className={`col-md-3 d-flex justify-content-center mx-2 my-2 ${bg8}`} style={{ border: '1px solid black', cursor: 'pointer' }} onClick={() => handleSeat(8)}>
                        8
                    </div>
                    {preSeats.map(preSeat => preSeat === 9 && (bg9 = "bg-danger"))}
                    <div className={`col-md-3 d-flex justify-content-center mx-2 my-2 ${bg9}`} style={{ border: '1px solid black', cursor: 'pointer' }} onClick={() => handleSeat(9)}>
                        9
                    </div>
                    {preSeats.map(preSeat => preSeat === 10 && (bg10 = "bg-danger"))}
                    <div className={`col-md-3 d-flex justify-content-center mx-2 my-2 ${bg10}`} style={{ border: '1px solid black', cursor: 'pointer' }} onClick={() => handleSeat(10)}>
                        10
                    </div>
                </div>
            </div>

            <div className="card mt-5 container">
                <Elements stripe={stripePromise}>
                    <StripePaymentForm ticketType={ticketType} places={places} seats={seats}></StripePaymentForm>
                </Elements>
            </div>
        </div>
    );
};

export default Seats;