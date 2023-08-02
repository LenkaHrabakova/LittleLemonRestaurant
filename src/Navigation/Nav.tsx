import { useState } from 'react';
import { Button } from '../Button/Button';
import './Nav.css';

export function Nav() {
  const [closed, setClosed] = useState(true);
  return (
    <nav className={`navigation ${closed ? 'navigation-closed' : ''}`}>
      <Button
        imgSrc="./bars-solid.svg"
        imgAlt="hamburger-ico"
        type="button"
        className="navigation-toggle"
        onClick={() => setClosed((a) => !a)}
      />
      <ul className="navigation-list">
        <li className="navigation-item">
          <a href="/#">Home</a>
        </li>
        <li className="navigation-item">
          <a href="/about-us">About us</a>
        </li>
        <li className="navigation-item">
          <a href="/menu">Menu</a>
        </li>
        <li className="navigation-item">
          <a href="/reservation">Reservations</a>
        </li>
        <li className="navigation-item">
          <a href="/online-order">Order online</a>
        </li>
        {/* <li className="navigation-item">
          <a href="/login">Login</a>
        </li> */}
      </ul>
    </nav>
  );
}
