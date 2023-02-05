import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { useFetchReservationsQuery } from '../redux/reducer/reservation';
import { fetchReservations } from '../redux/slices/reservationsSlice';
import { useFetchShipsQuery } from '../redux/slices/ships-slice';

export default function Reservations() {
  const reservation = useSelector((state) => state.reservations.reservations);
  const user = useSelector((state) => state.user);
  const { data: ships, isFetching } = useFetchShipsQuery();
  const [reservations, setReservations] = useState([]);
  const localShips = {};
  const setLocalShips = () => {
    if (!isFetching) {
      ships.forEach((ship) => {
        localShips[ship.id] = [ship.name, ship.image];
      });
      console.log('localShips', localShips);
    }
  };
  setLocalShips();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchReservations());
  }, []);
  useEffect(() => {
    setReservations(reservation);
  }, []);

  console.log('reservation', reservation);
  return (
    <div className="mt-5">



      <h1 className="text-center">RESERVATIONS</h1>

      <div className="container">
        { user !== 'success' ? <h1 className="text-center"> You need to signUp to make a reservation </h1> : reservations.map((res) => {
          const currentId = res.id;
          console.log('currentId', currentId);
          console.log('localShips', localShips);
          return (
            <div key={res.id} className="card mb-3 w-75 mx-auto mt-5">
              <div className="row g-0">
                <div className="col-md-4 d-flex justify-content-center">
                  <img src={localShips.currentId} className="img-fluid rounded-start" alt="ship" />
                </div>
                <div className="col-md-3 mx-auto">
                  <div className="card-body">
                    <div>
                      <h3 className="card-title text-center">Reservation</h3>
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
          );
        })}
      </div>

    </div>
  );
}
