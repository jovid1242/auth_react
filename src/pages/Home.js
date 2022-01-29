import React from "react";
import { Link } from "react-router-dom";

export default function home() {
  return (
    <div>
      <center>
        <h2>
          Привет <Link to="/register">Нажми здесь</Link>
        </h2>
      </center>
    </div>
  );
}
