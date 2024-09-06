import React, { Component } from "react";
import back from "./images/next.png";
import cactus from "./images/cactus.png";
import { Link } from "react-router-dom";

function Back() {
  return (
    <>
      <div className="navbar position-sticky top-0 w-100 " id="backNav">
        <div className="container-fluid mx-3">
          <div className="navbar-brand">
            <img src={cactus} alt="" style={{ width: "50px" }} />
          </div>
          <Link to={"/"}>
            <button>
              <img src={back} alt="" style={{ width: "20px" }} />
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Back;
