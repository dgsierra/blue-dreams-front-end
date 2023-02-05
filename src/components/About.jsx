/* eslint-disable max-len */
import React from 'react';
import './About.css';

function About() {
  return (
    <div className="bg-1">

      <div className="mt-5 ms-5">

        <h1 className="text-center mt-1">ABOUT THE COMPANY</h1>
        <p className="text-dark w-50 mt-5 mx-auto">
          Welcome to Blue Dreams Yatch, the premier provider of luxury yatch rentals with 10 years of experience.
          We have been providing our customers with the ultimate yatch rental experience for a decade now.
          Whether you are looking for a romantic getaway or a fun-filled family vacation, we have a yatch that will meet your needs.
          Our fleet of yatches includes a variety of sizes and styles, from small and intimate vessels to larger, more spacious yatches that can accommodate large groups.
          All of our yatches are well-maintained and equipped with the latest amenities to ensure a comfortable and enjoyable trip.
          With 10 years of experience in the yatch rental industry, we have the knowledge and expertise to provide you with the best possible experience.
          Our team of experienced and knowledgeable professionals is dedicated to providing exceptional customer service and will work closely with you to plan the perfect yatch rental experience.
          From start to finish, we will be there to assist you with every aspect of your trip, including selecting the right yatch, planning your itinerary, and providing you with all the information you need to make the most of your time on the water.
          At Blue Dreams Yatch, we pride ourselves on providing our customers with the best possible experience. Whether you are a seasoned yatch enthusiast or a first-time renter, we are confident that you will have a wonderful time on one of our yatches.
          So why wait? Contact us today to start planning your next yatch rental adventure!
        </p>
        <div className="text-center d-flex justify-content-center gap-5">
          <div>
            <p className="mt-2"><strong>Acapulco (Mexico)</strong></p>
            <button className="mt-2 p-3 mb-5 btn-bg text-light" type="button">011 + 1 + 305 + 555-1234</button>
          </div>
          <div>
            <p className="mt-2"><strong>Cartagena (Colombia)</strong></p>
            <button className="mt-2 p-3 mb-5 btn-bg text-light" type="button">011 + 1 + 305 + 555-1234</button>
          </div>
          <div>
            <p className="mt-2"><strong>Port Madero (Argentina)</strong></p>
            <button className="mt-2 p-3 mb-5 btn-bg text-light" type="button">011 + 1 + 305 + 555-1234</button>
          </div>
          <div>
            <p className="mt-2"><strong>Beach El Yaque (Venezuela)</strong></p>
            <button className="mt-2 p-3 mb-5 btn-bg text-light" type="button">011 + 1 + 305 + 555-1234</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
