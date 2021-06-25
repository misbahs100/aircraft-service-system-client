import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import StripePaymentForm from '../StripePaymentForm/StripePaymentForm'
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51IebtOEfLSXh2ldbzYeSMtviCqBvw8YzxhRbhXc265i3Sm6U2KPd15mkawWspI5SKKHTR098dyG37HCBT5Ks8qsA00DWv77nhV');

let backgroundColor = "bg-success";
const red = "bg-danger"


const Seats = ({ places, ticketType }) => {
    console.log(places.source);

    let [ticketCount, setTicketCount] = useState(0);
    const [seats, setSeats] = useState([]);


    const handleSeat = (seatNo) => {

        if (ticketCount <= 4) {
            // console.log("seat clicked", seatNo)
            setTicketCount(++ticketCount);
            console.log("ticketCount", ticketCount);
            seats.push(seatNo);
            setSeats(seats);
            console.log(seats);
        }
        else {
            console.log("exceed")
        }
    }


    return (
        <div>
            <div className="card mt-5 container">
                <h2>Please choose a seat except RED (maximum 5)</h2>
                <p>Your seats are: {seats.map(seat=><span>{seat}, </span>)}</p>

                <div className="row">
                    <button className={`col-md-3 d-flex justify-content-center mx-2 my-2 ${backgroundColor}`} style={{ border: '1px solid black' }} onClick={() => handleSeat(1)}>
                        1
                    </button>
                    <div className={`col-md-3 d-flex justify-content-center mx-2 my-2 ${backgroundColor}`} style={{ border: '1px solid black', cursor: 'pointer' }} onClick={() => handleSeat(2)}>
                        2
                    </div>
                    <div className={`col-md-3 d-flex justify-content-center mx-2 my-2 ${backgroundColor}`} style={{ border: '1px solid black', cursor: 'pointer' }} onClick={() => handleSeat(3)}>
                        3
                    </div>
                    <div className={`col-md-3 d-flex justify-content-center mx-2 my-2 ${backgroundColor}`} style={{ border: '1px solid black', cursor: 'pointer' }} onClick={() => handleSeat(4)}>
                        4
                    </div>
                    <div className={`col-md-3 d-flex justify-content-center mx-2 my-2 ${backgroundColor}`} style={{ border: '1px solid black', cursor: 'pointer' }} onClick={() => handleSeat(5)}>
                        5
                    </div>
                    <div className={`col-md-3 d-flex justify-content-center mx-2 my-2 ${backgroundColor}`} style={{ border: '1px solid black', cursor: 'pointer' }} onClick={() => handleSeat(6)}>
                        6
                    </div>
                    <div className={`col-md-3 d-flex justify-content-center mx-2 my-2 ${backgroundColor}`} style={{ border: '1px solid black', cursor: 'pointer' }} onClick={() => handleSeat(7)}>
                        7
                    </div>
                    <div className={`col-md-3 d-flex justify-content-center mx-2 my-2 ${backgroundColor}`} style={{ border: '1px solid black', cursor: 'pointer' }} onClick={() => handleSeat(8)}>
                        8
                    </div>
                    <div className={`col-md-3 d-flex justify-content-center mx-2 my-2 ${backgroundColor}`} style={{ border: '1px solid black', cursor: 'pointer' }} onClick={() => handleSeat(9)}>
                        9
                    </div>
                    <div className={`col-md-3 d-flex justify-content-center mx-2 my-2 ${backgroundColor}`} style={{ border: '1px solid black', cursor: 'pointer' }} onClick={() => handleSeat(10)}>
                        10
                    </div>


                </div>

                {/* <Link to="/payment"> */}
                <button>Done</button>
                {/* </Link> */}


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