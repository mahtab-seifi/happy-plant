import React, { Component } from "react";
import jade from "./images/JADE_PLANT-removebg-preview.png";
import moon from "./images/MoonCactus-removebg-preview.png";
import Zz from "./images/ZZPLANT-removebg-preview.png";
import christmas from "./images/ChristmasCactus-removebg-preview.png";
import SecondMain from "./secondMain";
import first from "./images/three4-removebg-preview.png";
import second from "./images/three3-removebg-preview.png";
import third from "./images/three6-removebg-preview.png";
import fourth from "./images/three5-removebg-preview.png";
import Carousel from "react-bootstrap/Carousel";

function FisrtMain() {
  return (
    <>
      <Carousel data-bs-theme="dark" id="fmain">
        <Carousel.Item className="mb-5" id="card1">
          <img className=" " src={first} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item className="mb-5" id="card2">
          <img className=" " src={second} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item className="mb-5" id="card">
          <img className="" src={third} alt="fouth slide" />
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default FisrtMain;
