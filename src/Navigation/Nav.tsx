import React from "react";
import "./Nav.css";

function Nav() {
  return (
    <nav className="navigation">
      <ul className="navigation-list">
        <li>
          <a href="/#">Home</a>
        </li>
        <li>
          <a href="/about-us">About us</a>
        </li>
        <li>
          <a href="/menu">Menu</a>
        </li>
        <li>
          <a href="/reservation">Reservations</a>
        </li>
        <li>
          <a href="/online-order">Order online</a>
        </li>
        <li>
          <a href="/login">Login</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
