import React, { Component } from 'react';
import Back from './back';
import { useParams } from 'react-router-dom';
import water from "./images/drop (1).png";
import light from "./images/brightness.png";
import temp from "./images/temperature.png";
import time from "./images/repeat.png";
import pot from "./images/pot.png";
import BackThree from './BackThree';

function Tdetail({trees}) {
    const {productId}=useParams()
    const detail =trees.find(treess=>treess.id===parseInt(productId))
    return ( <>
   <BackThree/>
    <div className="detail mx-3 my-5">
       
        <div> <img src={detail.image} alt="" className="firstimage"/></div>
       
        <div className="careDetails">
          {" "}
          <div className="water">
            <img src={water} alt="" />
              {detail.water}
          
          </div>
          <div className="light">
            <img src={light} alt="" />
            {detail.light}
          </div>
          <div className="temp">
            <img src={temp} alt="" />
            {detail.temp}
          </div>
          <div className="time">
            <img src={time} alt="" />
            {detail.time}
          </div>
          <div className="pot">
            <img src={pot} alt="" />
            {detail.pot}
          </div>
        </div>
      </div>
    </> );
}

export default Tdetail;