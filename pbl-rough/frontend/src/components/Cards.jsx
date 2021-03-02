import React from "react";
import gimg from "../images/gimg.jpg";
import dimg from "../images/dimg.jpeg";
import pimg from "../images/pimg.jpeg";
import rimg from "../images/rimg.png";

function Cards() {
  return (
    <div>
      <div class="container">
        <div class="row">
          <div class="col-md-3 col-sm-4">
            <div className="card card-block" id="gg">
              <img className="imgc" src={gimg} alt="img" />
              <h5 class="card-title mt-3 mb-3">Gayatri Godbole</h5>
              <p class="card-text">I am Gayatri.</p>
            </div>
          </div>
          <div class="col-md-3 col-sm-5">
            <div class="card card-block" id="dg">
              <img className="imgc" src={dimg} alt="img" />
              <h5 class="card-title  mt-3 mb-3">Dheeraj Gonchigar</h5>
              <p class="card-text">I am Dheeraj.</p>
            </div>
          </div>
          <div class="col-md-3 col-xs-6">
            <div class="card card-block" id="pj">
              <img className="imgc" src={pimg} alt="img" />
              <h5 class="card-title  mt-3 mb-3">Pushkar Jain</h5>
              <p class="card-text">I am Pushkar.</p>
            </div>
          </div>
          <div class="col-md-3 col-sm-6">
            <div class="card card-block" id="rk">
              <img className="imgc" src={rimg} alt="img" />
              <h5 class="card-title  mt-3 mb-3">Rohan Khole</h5>
              <p class="card-text">I am Rohan.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Cards;
