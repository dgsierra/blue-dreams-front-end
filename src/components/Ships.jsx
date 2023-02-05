import React, { useEffect } from 'react';
import './Ship.css';
import img1 from '../assets/anchor1.png';
import img2 from '../assets/anchor2.png';
import { useFetchShipsQuery, usePostShipMutation } from '../redux/slices/ships-slice';

const Ships = () => {
  const { data: ships, isFetching } = useFetchShipsQuery();
  const [postShip] = usePostShipMutation();
  useEffect(
    postShip({
      name: 'ship1', image: 'http://www.miimg.com', capacity: 10, price: 1000, availability: true, sale: false, price_sale: 0,
    }),
    [],
  );
  return (
    <div className="bg-image1">
      <br />
      <br />
      <h1 className="mt-5 text-center">SHIPS CATALOG</h1>
      <div id="carouselExampleInterval" className="carousel slide w-75 mt-5 mx-auto" data-bs-ride="carousel">
        <div className="carousel-inner ms-2">
          {isFetching ? <h1>Loading...</h1> : ships.map((ship, index) => (
            <div key={ship.id} className={index === 0 ? 'carousel-item active' : 'carousel-item mt-5'} data-bs-interval="2000">
              <img src={ship.image} className="ships-img w-50 mx-auto d-block mt-5" alt="ships" />
              <h4 className="text-center text-secondary mt-5">
                Model:
                {' '}
                {ship.name}
              </h4>
              <h4 className="text-center text-secondary mt-5">
                Price:
                {' '}
                {ship.price}
              </h4>
              <h4 className="text-center text-secondary mt-5">
                Capacity:
                {' '}
                {ship.capacity}
              </h4>
              <h4 className="text-center text-secondary mt-5">
                Sale:
                {' '}
                {ship.sale === true ? 'For Sale' : 'Not for Sale'}
              </h4>
            </div>
          ))}
        </div>
        <div>
          <button className="carousel-control-prev ms-5" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
            <img src={img1} alt="..." className="mt-5" />
          </button>
          <button className="carousel-control-next ms-5" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
            <img src={img2} alt="..." className="mt-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Ships;
