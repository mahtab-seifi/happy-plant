import React, { Component } from "react";
import phone from "./images/telephone.png";
import insta from "./images/instagram.png";

function Footer() {
  return (
    <>
      <footer>
        <div className="mx-3">
          <h5>ارتباط با ما</h5>
          <div id="footerdetial">
            <div >
              <img src={phone} alt="" /> 09333358191
            </div>
            <div>
              <img src={insta} alt="" /> happy_plant
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
