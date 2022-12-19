//import React, { Component } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

export function Navbar(props) {
  return (
    <div className="Nav-element">
      <ul className="Nav-bar-list">
        <li>
          <Link to="/" className="List">
            Home
          </Link>
        </li>

        <li>
          <Link to="/About" className="List">
            About
          </Link>
        </li>
        <li>
          <Link to="Bookcase" className="List">
            Bookcase {props.count}
          </Link>
        </li>
      </ul>
    </div>
  );
}
