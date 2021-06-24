import React, { useState } from 'react';
import { Link } from 'react-router-dom';

let backgroundColor = "bg-success";
const red = "bg-danger"


const Seats = () => {
    let [ticketCount, setTicketCount] = useState(0);

    const handleSeat = (seatNo) => {

        if (ticketCount <= 4) {
            console.log("seat clicked", seatNo)
            setTicketCount(++ticketCount);
            console.log("ticketCount", ticketCount);
        }
        else {
            console.log("exceed")
        }
    }


    return (
        <div>
            <div className="card mt-5 container">
                <h2>Please choose a seat except RED</h2>

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

                <Link to="/payment">
                    <button>Done</button>
                </Link>
            </div>
        </div>
    );
};

export default Seats;