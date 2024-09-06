import React, { Component } from "react";
import Cactus from "./cactus";
import Back from "./back";
import { Link } from "react-router-dom";

function Cactuss({plant}) {
  return (
    <>
    <Back/>
      <div id="" className="mx-5 my-5 Cmenu">
        {plant.map((plants,index) => (
            <Link to={`/detail/${plants.id}` } className="text-decoration-none">
          <Cactus
            Name={plants.Name}
            key={plants.index}
            image={plants.image}
            id={plants.id}
            temp={plants.temp}
            time={plants.time}
            water={plants.water}
            light={plants.light}
            pot={plants.pot}
          /></Link>
        ))}
      </div>
    </>
  );
}

export default Cactuss;
