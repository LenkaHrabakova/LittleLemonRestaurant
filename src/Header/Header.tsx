import React from "react";
import "./Header.css";
import Nav from "../Navigation/Nav";

function Header() {
  return (
    <header>
      <img src="/Logo.svg" alt="logo" />
      <Nav />
    </header>
  );
}

export default Header;
