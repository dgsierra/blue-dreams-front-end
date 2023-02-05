import React from 'react';
import { usePostShipMutation } from '../redux/slices/ships-slice';

const ShipsPost = () => {
  const [postShip] = usePostShipMutation();

  const handlerShip = (shipInfo) => postShip(shipInfo);

  return <div>ShipsPost</div>;
};

export default ShipsPost;
