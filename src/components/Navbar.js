import './Navbar.css';
import { React } from 'react';
import { Route, Routes } from 'react-router-dom';
import logo1 from '../assets/logo.png';
import Bookings from './Bookings';
import Login from './Login';
import Ships from './Ships';
import Reservations from './Reservations';
import About from './About';
import { useFetchShipsQuery } from '../redux/slices/ships-slice';

export default function Navbar() {
  const { data: ships, isFetching } = useFetchShipsQuery();
  console.log('ships', ships);
  console.log('isFetching', isFetching);
  return (
    <>
      <nav className="navbar navbar-dark bg-primary fixed-top">
        <div className="container-fluid">
          <div className="navbar-brand ms-5">Blue Dreams Yatch</div>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="offcanvas offcanvas-start text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
            <div className="offcanvas-header">
              <img src={logo1} className="w-50 mx-auto" alt="Blue Dram Logo" />
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close" />
            </div>
            <div>
              <ul className="navbar-nav text-start pe-3">
                <a href="/" className="btn btn-hover mt-3 w-75 ms-5 text-decoration-none link-dark">SHIPS</a>
                <a href="/reservations" className="btn btn-hover mt-3 w-75 ms-5 text-decoration-none link-dark">RESERVATIONS</a>
                <a href="/booking" className="btn btn-hover mt-3 w-75 ms-5 text-decoration-none link-dark">BOOKING</a>
                <a href="/about" className="btn btn-hover mt-3 w-75 ms-5 text-decoration-none link-dark">ABOUT</a>
                <a href="/login" className="btn btn-dark mt-3 w-75 ms-5 text-decoration-none link-light">LOG-IN</a>
              </ul>
            </div>
            <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" rel="stylesheet" />
            <div className="container ms-4 mt-5">
              <a href="https://facebook.com" className="btn btn-social-icon btn-twitter ms-3" target="_blank" rel="noreferrer">
                <span className="fa-stack fa-2x mt-5">
                  <i className="fa fa-facebook mt-5" />
                </span>
              </a>
              <a href="https://twitter.com" className="btn btn-social-icon btn-twitter" target="_blank" rel="noreferrer">
                <span className="fa-stack fa-2x mt-5">
                  <i className="fa fa-twitter mt-5" />
                </span>
              </a>
              <a href="https://gmail.com" className="btn btn-social-icon btn-twitter" target="_blank" rel="noreferrer">
                <span className="fa-stack fa-2x mt-5">
                  <i className="fa fa-google mt-5" />
                </span>
              </a>
            </div>
            <h6 className="text-center mt-4">Bogotá City 2023 Copy right reserved</h6>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Ships />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/booking" element={<Bookings />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<h1>404: Not Found</h1>} />
      </Routes>
    </>
  );
}
