import { useEffect, useRef, useState } from "react";
import logo from "../assets/icons/logodelirium.png";
import menuIcon from "../assets/icons/menu.svg";
import "./Navbar.css";

function Navbar() {
  const [menuAberto, setMenuAberto] = useState(false);
  const [logoDocked, setLogoDocked] = useState(false);
  const logoRef = useRef(null);

  useEffect(() => {
    const el = logoRef.current;
    if (!el) return;
    const onEnd = () => setLogoDocked(true);
    el.addEventListener("animationend", onEnd);
    return () => el.removeEventListener("animationend", onEnd);
  }, []);

  return (
    <header className="navbar">
  <div className="logo-container">
    <img
      ref={logoRef}
      src={logo}
      className={logoDocked ? "logo docked" : "logo"}
      alt="Delirium Studio"
    />
  </div>

  <img
    src={menuIcon}
    className="hamburguer"
    onClick={() => setMenuAberto(!menuAberto)}
    alt="Menu"
  />

      <nav className={menuAberto ? "menu ativo" : "menu"}>
        <a href="#inicio">Início</a>
        <a href="#sobre">Sobre</a>
        <a href="#artistas">Artistas</a>
        <a href="#curso">Curso</a>
        <a href="#contato">Contato</a>
      </nav>
    </header>
  );
}

export default Navbar;
