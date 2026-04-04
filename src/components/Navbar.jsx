import { useState } from "react";
import logo from "../assets/icons/logodelirium.png";
import menuIcon from "../assets/icons/menu.svg";
import "./Navbar.css";

function Navbar() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <header className="navbar">
      <img src={logo} className="logo" alt="Delirium Studio" />

      <img
        src={menuIcon}
        className="hamburguer"
        onClick={() => setMenuAberto(!menuAberto)}
        alt="Menu"
      />

      <nav className={menuAberto ? "menu ativo" : "menu"}>
        <a href="#inicio">Início</a>
        <a href="#sobre">Sobre</a>
        <a href="#artistas">Artista</a>
        <a href="#curso">Curso</a>
        <a href="#contato">Contato</a>
      </nav>
    </header>
  );
}

export default Navbar;
