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
          <li>
            <a href="tel:{phone}">{phone}</a>
          </li>
          <li>
            <a href="mailto:{email}">{email}</a>
          </li>
        </ul>
        <ul className="footer-social">
          <li>
            <a href="https://www.instagram.com/">
              <img src="instagram.svg" alt="instagram" />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/">
              <img src="facebook.svg" alt="facebook" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
