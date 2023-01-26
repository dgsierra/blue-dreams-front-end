import React from 'react';
import { useFetchShipsQuery } from '../redux/slices/ships-slice';

export default function Ships() {
  const { data: ships, isFetching } = useFetchShipsQuery();
  console.log('ships', ships);
  console.log('isFetching', isFetching);
  return (
    <div>Ships The Component </div>
  );
}
