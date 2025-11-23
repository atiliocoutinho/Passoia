
import { useState } from "react";
import "./Header.scss";
import logo from "../../assets/logo.png";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header>
      <nav>

        <img class="logo" src={logo} alt="Logo" />

        <div id="menu-mobile" onClick={() => setMenuOpen(!menuOpen)}>
          <div>
            <div class="line line1"></div>
            <div class="line line2"></div>
            <div class="line line3"></div>
          </div>
        </div>
        
        <ul class="header-ul">
          <li class="li-header"><a href="#">LOOKS</a></li>
          <li class="li-header"><a href="#">LANÇAMENTOS</a></li>
          <li class="li-header"><a href="#">NOVIDADES</a></li>
        </ul>
      </nav>

      <aside className={`sidebar ${menuOpen ? "active" : ""}`}>
        <a href="#Looks">LOOKS</a>
        <a href="#Lançamentos">LANÇAMENTOS</a>
        <a href="#Novidades">NOVIDADES</a>
      </aside>

     {menuOpen && (
        <div
          className="overlay"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

    </header>
  );
}

export default Header;
