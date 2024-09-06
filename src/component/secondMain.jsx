import React, { Component } from "react";
import indoor from "./images/second.png";
import { Link } from "react-router-dom";

function SecondMain() {
  return (
    <>
      <div className="sMain">
        <div className="mx-3" id="secondMain">
          <img src={indoor} alt="" />
          <h1>اهمیت گیاه در خانه</h1>
          <p>
            در هیاهو و شلوغی دنیای امروزی، استفاده از گیاهان سبز در فضای داخلی
            منازل، نه تنها زیبایی و تازگی خاصی به محیط می‌بخشد، بلکه به بهبود
            کیفیت هوا و ایجاد حس آرامش در اعضای خانواده نیز کمک شایانی می‌کند.
          </p>
          <div id="btn">
            <Link to={"/care"}> <button >
             ادامه مطلب 
          </button> </Link>
           
          </div>
         
        </div>
      </div>
    </>
  );
}

export default SecondMain;
