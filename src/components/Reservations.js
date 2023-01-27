import yatch1 from '../assets/yatch1.png';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { useFetchReservationsQuery } from '../redux/reducer/reservation';
import { fetchReservations } from '../redux/slices/reservationsSlice';


export default function Reservations() {
  const reservation = useSelector((state) => state.reservations.reservations);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchReservations());
  }, []);
  console.log('reservation', reservation);
  return (
    <div className="mt-5">
      <br />
      <br />
      <br />
      <h1 className="text-center">RESERVATIONS</h1>
      <div className="card mb-3 w-75 mx-auto mt-5">
        <div className="row g-0">
          <div className="col-md-4 d-flex justify-content-center">
            <img src={yatch1} className="img-fluid rounded-start" alt="ship" />
          </div>
          <div className="col-md-3 mx-auto">
            <div className="card-body">
              <div>
                <h3 className="card-title text-center">Diego Reservation</h3>
                <h5 className="text-success text-center">Model: SPEEDER</h5>
                <h5 className="card-title text-center mt-4">Buenos Aires</h5>
                <div className="d-flex mt-4 justify-content-center">
                  <div>
                    <h5 className="me-5 ms-1 bg-dark text-light p-2 mb-2">Start</h5>
                    <p>2023-02-22</p>
                  </div>
                  <div>
                    <h5 className="bg-dark text-light p-2 mb-2 text-center w-75">End</h5>
                    <p className="w-100">2023-02-22</p>
                  </div>
                </div>
              </div>
                
                
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
