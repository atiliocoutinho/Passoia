import "./Header.scss";
import logo from "../../assets/logo.png";

function Header() {
  return (
    <header>
      <nav>
        <img class="logo" src={logo} alt="Logo" />
        <ul>
          <li>LOOKS</li>
          <li>LANÇAMENTOS</li>
          <li>NOVIDADES</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
