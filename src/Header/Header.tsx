import './Header.css';
import { Nav } from '../Navigation/Nav';

export function Header() {
  return (
    <header>
      <img src="/Logo.svg" alt="logo" />
      <Nav />
    </header>
  );
}
