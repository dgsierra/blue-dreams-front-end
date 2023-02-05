/* eslint-disable max-len */
import React from 'react';
import './Booking.css';

export default function Bookings() {
  return (
    <div className="bg1">
      <div className="mt-3 ms-5">

        <ul className="ms-4 list-unstyled text-light">
          <li className="mt-5 text-center">Policy and procedure for a ship rental company</li>
          <li className="mt-3">Policy:</li>
        </ul>
        <ul className="ms-5 list-unstyled text-light">
          <li>1. All rental boats must be returned in the same condition as when they were rented.</li>
          <li>2. Renters must have a valid boaters license and provide proof of insurance.</li>
          <li>3. Renters must be at least 18 years of age and provide a valid government-issued ID.</li>
          <li>4. Renters must review and sign a rental agreement prior to taking possession of the boat.</li>
          <li>5. Renters are responsible for any damages or losses incurred during the rental period.</li>
          <li>6. Smoking and consuming illegal drugs are strictly prohibited on all rental boats.</li>
          <li>7. Renters must return the boat on time, late returns will be subject to additional fees.</li>
          <li>8. Pets are not allowed on rental boats.</li>
          <li>9. Renters must inform the company of any issues or problems with the boat immediately.</li>
          <li>10. Renters are responsible for following all applicable laws and regulations while operating the rental boat.</li>
          <li className="mt-1">Procedure:</li>
          <li>1. Customers must make a reservation in advance to rent a boat.</li>
          <li>2. Upon arrival, customers must present a valid government-issued ID and boaters license for verification.</li>
          <li>3. Customers must review and sign the rental agreement.</li>
          <li>4. Customers will receive a brief orientation on the operation of the boat and safety procedures.</li>
          <li>5. Customers will be provided with all necessary safety equipment, including life jackets.</li>
          <li>6. Customers will be given a walk-through of the boat to ensure it is in good working condition before taking possession of the ship.</li>
          <li>7. Customers will be responsible for refueling the boat before returning it to the rental company.</li>
          <li>8. Upon return, a company representative will inspect the boat for damages or losses.</li>
          <li>9. Customers will be charged for any damages or losses incurred during the rental period.</li>
          <li>10. Customers will be provided with a receipt for their rental.</li>
        </ul>
        <div className="text-center">
          <button type="button" className="btn navbar-toggler bg-dark p-2 text-decoration-none link-light mb-4" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            BOOK NOW
          </button>
        </div>
        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content bg2">
              <div className="modal-header">
                <h5 className="modal-title text-light" id="staticBackdropLabel">BOOKING</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <form>
                <fieldset className="p-5">
                  <div className="mb-3">
                    <p className="form-label text-light">Ships</p>
                    <select id="disabledSelect" className="form-select">
                      <option>Select</option>
                      <option>YT-H5</option>
                      <option>SPEEDER</option>
                      <option>GWT-RH</option>
                      <option>MT-TRAVEL</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <p className="form-label text-light">City</p>
                    <select name="select" id="Select" className="form-select">
                      <option>Select</option>
                      <option>Cartagena</option>
                      <option>Lecherias</option>
                      <option>Cancun</option>
                      <option>Punta del Este</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <p htmlFor="Select" className="bg form-label text-light">Start Date</p>
                    <div className="input-group date" id="datepicker">
                      <input type="text" className="form-control" />
                      <span className="input-group-append">
                        <span className="input-group-text bg-white">
                          <i className="fa fa-calendar" />
                        </span>
                      </span>
                    </div>
                    <p className="form-label mt-3 text-light">End Date</p>
                    <div className="input-group date" id="datepicker">
                      <input type="text" className="form-control" />
                      <span className="input-group-append">
                        <span className="input-group-text bg-white">
                          <i className="fa fa-calendar" />
                        </span>
                      </span>
                    </div>
                    <div className="text-center d-flex justify-content-center row">
                      <p htmlFor="Select" className="form-label mt-3 text-light">Cost</p>
                      <card type="display" className="form-control form1 p-3 w-50" />
                    </div>
                  </div>
                  <button type="submit" className="btn btn-dark text-light">BOOK NOW</button>
                </fieldset>
              </form>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
