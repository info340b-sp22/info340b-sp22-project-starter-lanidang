import React, { useState } from "react";
import { useLocation, NavLink } from "react-router-dom";

export function Result() {
  const location = useLocation();
  let state = location.state;

  console.log("state", state);
  let result = {};
  if (
    (state.Frequency === "Everyday") |
    (state.Frequency === "Only Workdays")
  ) {
    result = { ...result, price: "$300+" };
  } else {
    result = { ...result, price: "$0 - $300" };
  }
  if (result.Useage === "Work/Study") {
    result = {
      ...result,
      Brand: "APPLE",
      RAM_SiZE: "8GB +",
      os: "Mac",
      weight: "ThinNlight",
    };
  } else if (result.Useage === "Play games") {
    result = {
      ...result,
      Brand: "ALIENWARE",
      RAM_SiZE: "16B +",
      os: "Window",
      weight: "Gaming",
    };
  } else {
    result = {
      ...result,
      Brand: "Levono",
      RAM_SiZE: "4GB +",
      os: "Window",
      weight: "ThinNlight",
    };
  }

  const handleSubmit = () => {
    console.log("nav to home");
    // <NavLink to='/' />
  };

  return (
    <main className="pl-4 result-container relative">
      <img src="../../img/bestChoice.png" alt="best choice" width="300" />
      <h1 className="font-medium text-3xl text-indigo-700 ml-8 mb-3">
        Here's the best choice for you:
      </h1>
      <ul>
        <li className="mb-2 hover:bg-slate-300">➡️ Price: {result.price}</li>
        <li className="mb-2 hover:bg-slate-300">➡️ Brand: {result.Brand}</li>
        <li className="mb-2 hover:bg-slate-300">
          ➡️ RAM Size: {result.RAM_SiZE}
        </li>
        <li className="mb-2 hover:bg-slate-300">➡️ OS: {result.os}</li>
        <li className="mb-2 hover:bg-slate-300">➡️ Weight: {result.weight}</li>
      </ul>
      <div className="flex">
        {/* <button className="m-auto mb-4 bg-indigo-700 rounded-lg p-2 text-white" type='button' onClick={() => handleSubmit()}>Back to HOME page</button> */}
        <NavLink
          to="/takeTest"
          className="m-auto mb-4 bg-indigo-700 rounded-lg p-2 text-white"
        >
          Back
        </NavLink>
      </div>
    </main>
  );
}
