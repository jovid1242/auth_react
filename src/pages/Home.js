import React from "react";
import { Link } from "react-router-dom";

export default function home() {
  return (
    <div>
      <center>
        <h2>
          Привет
          <ul>
            <li>
              <Link to="/register">register</Link>
            </li>
            <li>
              <Link to="/login">login</Link>
            </li>
            <li>
              <Link to="/confirm">confirm</Link>
            </li>
          </ul>
        </h2>
      </center>
    </div>
  );
}
