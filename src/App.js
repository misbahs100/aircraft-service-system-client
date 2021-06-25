import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home'
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Login from './components/Login/Login';
import BookingPage from './components/BookingPage/BookingPage';
import Payment from './components/Payment/Payment';
import Seats from './components/Seats/Seats';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/booking/:id">
            <BookingPage></BookingPage>
          </PrivateRoute>
          {/* <Route path="/payment">
            <Payment></Payment>
          </Route>
          <Route path="/seats">
            <Seats></Seats>
          </Route> */}
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
