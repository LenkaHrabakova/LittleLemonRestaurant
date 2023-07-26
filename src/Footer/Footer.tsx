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
        <ul className="footer-address">
          <li>{address}</li>
          <li>{phone}</li>
          <li>{email}</li>
        </ul>

        <ul className="footer-social">
          <li>
            <img src="instagram.svg" alt="instagram" />
          </li>
          <li>
            <img src="facebook.svg" alt="facebook" />
          </li>
        </ul>
      </div>
    </footer>
  );
}
