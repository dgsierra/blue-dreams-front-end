import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { useFetchReservationsQuery } from '../redux/reducer/reservation';
import { fetchReservations } from '../redux/slices/reservationsSlice';

export default function Reservations() {
  // const { data: reservations, isFetching: isFetchingReservations } = useFetchReservationsQuery();
  // console.log('reservations', reservations);
  // console.log('isFetchingReservations', isFetchingReservations);
  const reservation = useSelector((state) => state.reservations.reservations);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchReservations());
  }, []);
  console.log('reservation', reservation);
  return (
    <div>
      {
      reservation.map((res) => (
        <div key={res.id}>
          <p>{res.id}</p>
          <p>{res.insurance}</p>
          <p>{res.ship_id}</p>
          <p>
            User id:
            {' '}
            {res.user_id}
          </p>
          <p>{res.date_start}</p>
        </div>
      ))
    }

    </div>
  );
}
