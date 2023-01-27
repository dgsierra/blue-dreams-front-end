import React from 'react';

import './Ship.css';
import img1 from '../assets/anchor1.png';
import img2 from '../assets/anchor2.png';
import yatch1 from '../assets/yatch1.png';
import { useFetchShipsQuery } from '../redux/slices/ships-slice';

// const { data: ships, isFetching } = useFetchShipsQuery();
console.log('ships', useFetchShipsQuery);
const Ships = () => (
  <div className="bg-image1">
    <br />
    <br />
    <h1 className="mt-5 text-center">SHIPS CATALOG</h1>
    <div id="carouselExampleInterval" className="carousel slide w-75 mt-5 mx-auto" data-bs-ride="carousel">
      <div className="carousel-inner ms-2">
        <div className="carousel-item active" data-bs-interval="10000">
          <img src={yatch1} className="w-50 mx-auto d-block mt-5" alt="ships" />
          <h5 className="text-center text-light mt-5">Model: SPEEDER</h5>
        </div>
        <div className="carousel-item mt-5" data-bs-interval="2000">
          <img src={yatch1} className="w-50 mx-auto d-block" alt="ships" />
          <h5 className="text-center text-light mt-5">Model: SPEEDER</h5>
        </div>
        <div className="carousel-item mt-5">
          <img src={yatch1} className="w-50 mx-auto d-block" alt="ships" />
          <h5 className="text-center text-light mt-5">Model: SPEEDER</h5>
        </div>
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

export default Ships;
