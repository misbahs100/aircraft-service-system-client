import React from 'react';
import { Link } from 'react-router-dom';
import './HeaderMain.css';
import business from '../../images/business.png';
import economy from '../../images/economy.jpg';

const HeaderMain = () => {
    return (
        <div>

            <main style={{ height: '600px', position: 'absolute' }} className="row d-flex align-items-center w-100 ">
                <div className="col-md-10 col-sm-10 col-10 offset-md-1 offset-1">
                    <h1 className="text-center mb-5"><span className="text-warning">Aircraft Ser</span><span className="text-white">vice System</span></h1>
                    <h1 className="text-white text-center">Welcome to the <span className="text-warning">10Seats</span> Aircraft</h1>
                    <p className="text-warning" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium libero necessitatibus facere aspernatur non sit nulla, et unde, harum dolore obcaecati tempore suscipit nihil quae. Consequatur quibusdam saepe sequi illum.</p>
                    <h5 className="text-center text-white">Select which package you want from below</h5>
                </div>

                <div className="col-md-6 d-flex justify-content-center">
                    <Link to="/booking/business">
                        <div>
                            <img style={{ width: '300px' }} src={business} alt="" />
                            <h3 className="text-white text-center">Business class</h3>
                        </div>
                    </Link>
                </div>

                <div className="col-md-6 d-flex justify-content-center">
                    <Link to="booking/economy">
                        <div>
                            <img style={{ width: '300px' }} src={economy} alt="" />
                            <h3 className="text-white text-center">Economy class</h3>
                        </div>
                    </Link>
                </div>
            </main>


        </div>
    );
};

export default HeaderMain;