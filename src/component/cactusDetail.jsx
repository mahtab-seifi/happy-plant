import React, { Component } from "react";
import { useParams } from "react-router-dom";

import BAckTwo from "./BackTwo";
import water from "./images/drop (1).png";
import light from "./images/brightness.png";
import temp from "./images/temperature.png";
import time from "./images/repeat.png";
import pot from "./images/pot.png";

function CDetail({ plant }) {
  const { productId } = useParams();
  const detials = plant.find((plants) => plants.id === parseInt(productId));
  return (
    <>
      <BAckTwo /> 
      <div className="detail mx-3 my-5">
       
        <div> <img src={detials.image} alt="" className="firstimage"/></div>
       
        <div className="careDetails">
          {" "}
          <div className="water">
            <img src={water} alt="" />
              {detials.water}
              
          </div>
          <div className="light">
            <img src={light} alt="" />
            {detials.light}
          </div>
          <div className="temp">
            <img src={temp} alt="" />
            {detials.temp}
          </div>
          <div className="time">
            <img src={time} alt="" />
            {detials.time}
          </div>
          <div className="pot">
            <img src={pot} alt="" />
            {detials.pot}
          </div>
        </div>
      </div>
    </>
  );
}

export default CDetail;
