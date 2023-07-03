import "./Footer.css";

export function Footer({
  logoSrc,
  logoAlt,
}: {
  logoSrc: string;
  logoAlt: string;
}) {
  return (
    <footer>
      <img src={logoSrc} alt={logoAlt} />
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
