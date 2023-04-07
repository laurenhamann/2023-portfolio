import React from "react";
import { Link } from "gatsby";
import daisy from "../images/daisy.svg";

export const SmallIntro = () => {
  return (
    <header id="small-header" data-test="small-header">
      <div className="flex-title">
        <img src={daisy} />

        <Link to="/">
          <h1 id="title"> Lauren Hamann </h1>
        </Link>
        <img src={daisy} />
      </div>
      <p id="subtitle"> Frontend Developer </p>
      <div></div>
    </header>
  );
};
