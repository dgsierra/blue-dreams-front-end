import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getReservation } from '../redux/reducer/reservation';
// import { isAuthenticated } from '../redux/reducer/user';

const ReservationsSched = () => {
  const dispatch = useDispatch();
  const reservations = useSelector((state) => state.reservations.data);
  const status = useSelector((state) => state.reservations.status);

  useEffect(() => {
    dispatch(getReservation());

    if (!Object.values(reservations).length) {
      dispatch(getReservation());
    }
  }, []);

  return (
    <>
      <div>
        {status === 'loading' && <div>Loading...</div>}
        {status === 'succeeded' && (
          <div>
            {reservations.map((reservation) => (
              <div key={reservation.id}>
                <div>{reservation.name}</div>
                <div>{reservation.email}</div>
                <div>{reservation.date_start}</div>
                <div>{reservation.date_end}</div>
                <div>{reservation.license}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default ReservationsSched();
