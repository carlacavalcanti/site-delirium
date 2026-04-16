import logo from "../../assets/icons/logodelirium.png";
import insta from "../../assets/icons/instagram.png";
import wpp from "../../assets/icons/whatsapp.png";

export default function Footer() {
  return (
    <footer>
      <div className="gap">
        <img src={logo} alt="Delirium Tattoo" className="logo-footer" />
        <p>
          Estúdio de tatuagem em Pipa – Rio Grande do Norte especializado em
          tatuagens autorais e free hand.
        </p>
        <p>Não é só tatuagem. É identidade.</p>
        <ul>
          <li>
            <a href="#inicio">Início</a>
          </li>
          <li>
            <a href="#sobre">Sobre</a>
          </li>
          <li>
            <a href="#artistas">Artistas</a>
          </li>
          <li>
            <a href="#curso">Curso</a>
          </li>
          <li>
            <a href="#contato">Contato</a>
          </li>
        </ul>
        <div className="redes-sociais">
          <img src={insta} alt="Instagram" />
          <p>@deliriumtattoo</p>

          <img src={wpp} alt="WhatsApp" />
          <p>+55 84 98807-5719</p>
        </div>
        <p>© 2026 Delirium Studio. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
