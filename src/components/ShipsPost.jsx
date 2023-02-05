import React from 'react';
import { usePostShipMutation } from '../redux/slices/ships-slice';

const ShipsPost = () => {
  const [postShip] = usePostShipMutation();

  // eslint-disable-next-line no-unused-vars
  const handlerShip = (shipInfo) => postShip(shipInfo);

  return <div>ShipsPost</div>;
};

export default ShipsPost;
