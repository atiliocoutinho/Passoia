import "./Header.scss";
import logo from "../../assets/logo.png";

function Header() {
  return (
    <header>
      <nav>
        <img class="logo" src={logo} alt="Logo" />
        <div id="menu-mobile">
          <div>
            <div class="line line1"></div>
            <div class="line line2"></div>
            <div class="line line3"></div>
          </div>
        </div>
        <ul>
          <li class="li-header"><a href="#">LOOKS</a></li>
          <li class="li-header"><a href="#">LANÇAMENTOS</a></li>
          <li class="li-header"><a href="#">NOVIDADES</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
