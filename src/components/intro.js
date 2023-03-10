import React from "react";
import daisy from "../images/daisy.svg";

export const Intro = () => {
  return (
    <header className="header" data-test="header">
      <div className="flex-title">
        <img src={daisy} />
        <h1 id="title"> Lauren Hamann </h1>
        <img src={daisy} />
      </div>
      <p id="subtitle"> Frontend Developer </p>
      <div></div>
    </header>
  );
};
