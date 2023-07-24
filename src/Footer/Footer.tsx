import "./Footer.css";

export function Footer({
  logoSrc,
  logoAlt,
  address,
  phone,
  email,
}: {
  logoSrc: string;
  logoAlt: string;
  address: string;
  phone: string;
  email: string;
}) {
  return (
    <footer>
      <div className="footer-logo">
        <img src={logoSrc} alt={logoAlt} />
      </div>
      <div className="footer-info">
        <ul className="footer-navigation">
          Contact
          <li>{address}</li>
          <li>{phone}</li>
          <li>{email}</li>
        </ul>

        <ul className="footer-navigation">
          Social media links
          <li>Address</li>
          <li>Phone number</li>
          <li>Email</li>
        </ul>
      </div>
    </footer>
  );
}
