import React from "react";
import "./Footer.css";

export function Footer() {
  return (
    <footer>
      <img src="Logo.svg" alt="logo" />
      <div>
        <ul className="footer-navigation">
          Navigation
          <li>Home</li>
          <li>About</li>
          <li>Menu</li>
          <li>Reservation</li>
          <li>Order online</li>
          <li>Login</li>
        </ul>
      </div>
      <div>
        <ul>
          Contact
          <li>Address</li>
          <li>Phone number</li>
          <li>Email</li>
        </ul>
      </div>
      <div>
        <ul>
          Social media links
          <li>Address</li>
          <li>Phone number</li>
          <li>Email</li>
        </ul>
      </div>
    </footer>
  );
}
