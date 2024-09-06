import React, { Component } from "react";
import Back from "./back";
import Tree from "./Tree";
import { Link } from "react-router-dom";

function Trees({ trees }) {
  return (
    <>
      <Back />
      <div className="mx-5 my-5 Cmenu">
        {trees.map((trees,index) => (
            <Link to={`/details/${trees.id}`} className=" text-decoration-none">
          <Tree
            Name={trees.Name}
            id={trees.id}
            key={trees.index}
            image={trees.image}
            temp={trees.temp}
            time={trees.time}
            water={trees.water}
            light={trees.light}
            pot={trees.pot}
          /></Link>
        ))}
      </div>
    </>
  );
}

export default Trees;
