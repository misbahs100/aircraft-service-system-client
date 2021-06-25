import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (
        <nav className="navbar navbar-expand-lg navbar-light">

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link className="nav-link mr-5 text-warning" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mr-5 text-warning" to="#">About Us</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mr-5 text-warning" to="#">Contact Us</Link>
                    </li>
                    <li className="nav-item">
                        {loggedInUser.email
                            ? <Link className="nav-link mr-5 text-danger" to="/login">{loggedInUser.name}</Link>
                            : <Link className="nav-link mr-5 text-danger" to="/login">Login</Link>
                        }
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;