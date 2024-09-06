import React, { Component } from "react";
import Back from "./back";

function Tree({Name,image}) {
  return (
    <>
      <div id="cactusMenu">
        <img src={image} alt="" id="overlay" />
        <span className="fs-5 ">{Name}</span>
      </div>
    </>
  );
}

export default Tree;
