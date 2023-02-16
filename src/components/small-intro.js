import React from "react";
import { Link } from "gatsby";

export const SmallIntro = () => {
  return (
    <header id="small-header" data-test="small-header">
      <Link to="/">
        <h1 id="title"> Lauren Hamann </h1>
      </Link>
      <p id="subtitle"> Frontend Developer </p>
      <div></div>
    </header>
  );
};
