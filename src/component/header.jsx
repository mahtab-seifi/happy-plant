import React, { Component } from "react";
import care from "./images/vector-removebg-preview.png";
import FisrtMain from "./main";



function Header() {
  return (
    <>
 
      <header className="px-3">
        <span>
          <p className="fs-1 fw-bold">هر گل یک روح است که به</p>
          <p className="fs-1 fw-bold">سوی طبیعت باز شده است </p>
        </span>
        <img src={care} alt="person taking care to plant" />
      </header>
      
    </>
  );
}

export default Header;
