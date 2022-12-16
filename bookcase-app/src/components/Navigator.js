//import React, { Component } from "react";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/About">About</Link>
        </li>

        <li>
          <Link to="Bookcase">Bookcase</Link>
        </li>
      </ul>
    </div>
  );
}
