import { React, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Ships from './Ships';
import Reservations from './Reservations';
import About from './About';
// import Login from './Login';
import Policy from './Policy';
import User from './User';

// eslint-disable-next-line no-console
const MyTest = () => console.log('Sign Out');

export default function Navbar() {
  const [currUser, setCurrUser] = useState(null);
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/reservations">Reservations</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/policy">Policy</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><button type="submit" onClick={MyTest}>Sign Out</button></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Ships />} />
        <Route path="/about" element={<About />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/login" element={<User currUser={currUser} setCurrUser={setCurrUser} />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="*" element={<h1>404: Not Found</h1>} />
      </Routes>
    </>
  );
}
