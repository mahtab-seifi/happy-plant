import React, { Component } from "react";
import moon from "./images/MoonCactus-removebg-preview.png";
import Back from "./back";
import background from "./images/background-removebg-preview.png"



function Cactus({ image, Name }) {
    
    
  return (
    <>
      <div id="cactusMenu" >
        <img src={image} alt=""id="overlay" />
        <span className="fs-5 ">{Name}</span>
      </div>
    </>
  );
}

export default Cactus;
