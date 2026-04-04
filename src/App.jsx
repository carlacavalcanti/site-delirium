import Navbar from "./components/Navbar.jsx";
import logo from "./assets/icons/logodelirium.png";
import instagram from "./assets/icons/instacolorido.png";
import whatsapp from "./assets/icons/wppverde.png";
import insta from "./assets/icons/instagram.png";
import wpp from "./assets/icons/whatsapp.png";
import foto from "./assets/imagens/dido.jpeg";

export default function App() {
  return (
    <>
      <Navbar />

      <main id="inicio">
        <section className="hero">
          <div className="container">
            <p className="eyebrow">DELIRIUM STUDIO</p>
            <h1>
              Transformando ideias em <span>arte na pele</span>.
            </h1>
            <p className="sub">
              Tatuagens autorais, exclusivas e feitas com identidade. Cada traço
              carrega uma história — a sua.
            </p>
            <div className="cta">
              <a
                className="btn btn-primary"
                href="https://wa.me/558488075719"
                target="_blank"
                rel="noreferrer"
              >
                Agendar sessão
              </a>
              <a
                className="btn btn-outline"
                href="https://wa.me/558488075719"
                target="_blank"
                rel="noreferrer"
              >
                Fazer orçamento
              </a>
            </div>
          </div>
        </section>

        <section id="sobre" className="section">
          <div className="container two-col">
            <div>
              <h2>Sobre o Estúdio</h2>
              <p>
                O Projeto Delirium Studio nasceu em 2014, com o propósito de
                transformar a tatuagem em algo além da estética: uma forma de
                expressão única e pessoal.
              </p>
              <p>
                A história começa ainda antes, em 2010, quando Dido iniciou sua
                jornada tatuando em Pipa, desenvolvendo sua técnica, estilo e
                visão artística ao longo dos anos.
              </p>
              <p>
                Hoje, com mais de 16 anos de experiência, o estúdio se destaca
                pela criação de artes autorais e exclusivas, sempre respeitando
                a identidade de cada cliente. Além de tatuar, o projeto também
                abre espaço para novos artistas, tornando o acesso à área mais
                possível — algo que no passado era muito mais difícil.
              </p>
            </div>
            <div className="card accent">
              <h3>Estilo e Proposta</h3>
              <ul className="list">
                <li>Artes autorais e personalizadas</li>
                <li>Estilo Neotraditional (identidade moderna e marcante)</li>
                <li>Projetos únicos, desenvolvidos do zero</li>
                <li>
                  Domínio em <strong>free hand</strong>, criando composições
                  diretamente na pele com precisão e segurança
                </li>
              </ul>

              <p className="muted">
                Cada projeto é desenvolvido de forma exclusiva, respeitando a
                ideia e a identidade de quem carrega a tatuagem.
              </p>
            </div>
          </div>
        </section>

        <section id="artistas" className="section">
          <div className="container artista-destaque">
            <div className="card artista-destaque__texto">
              <h2>Dido – Tattoo Artist</h2>
              <p>
                Com mais de 16 anos de experiência, Dido construiu uma
                trajetória baseada em evolução constante, técnica refinada e
                identidade artística forte. Destaque para o trabalho em{" "}
                <strong>free hand</strong>.
              </p>
              <p>
                Começou a tatuar em Pipa em 2010 e hoje também ajuda novas
                pessoas a iniciarem na área, abrindo espaço em um mercado que
                antigamente era mais difícil.
              </p>
            </div>
            <div className="artista-destaque__foto-shell">
              <img src={foto} alt="Dido, tattoo artist" className="dido" />
            </div>
          </div>
        </section>

        <section id="curso" className="section">
          <div className="container two-col">
            <div>
              <h2>Curso de Tatuagem</h2>
              <p>
                O curso <strong>Princípios da Tatuagem</strong>, criado em 2016,
                foi desenvolvido para quem deseja iniciar na área com base
                sólida e profissional. Conteúdos abordados:
              </p>
              <ul className="list">
                <li>Traço</li>
                <li>Degradê</li>
                <li>Sombreado</li>
                <li>Pontilhismo</li>
                <li>Preto e branco</li>
                <li>Colorimetria</li>
                <li>Free hand</li>
              </ul>
              <p className="muted">
                Mais do que técnica, o curso prepara o aluno para entrar no
                mercado com segurança e confiança.
              </p>
              <a
                className="btn btn-primary"
                href="https://wa.me/558488075719"
                target="_blank"
                rel="noreferrer"
              >
                Saiba mais sobre o curso
              </a>
            </div>
          </div>
        </section>

        <section id="feedbacks" className="section">
          <div className="container">
            <h2>Feedbacks</h2>
            <div className="grid-3">
              <div className="card quote">
                “Experiência incrível, atendimento impecável e resultado
                perfeito!”
              </div>
              <div className="card quote">
                “Profissionalismo e talento em cada detalhe.”
              </div>
              <div className="card quote">
                “Minha melhor tatuagem, sem dúvidas.”
              </div>
            </div>
          </div>
        </section>

        <section id="orcamento" className="section">
          <div className="container two-col">
            <div>
              <h2>Como funciona o orçamento</h2>
              <p>Muita gente tem dúvida. Funciona assim:</p>
              <ol className="list ordered">
                <li>Envie sua ideia pelo WhatsApp</li>
                <li>Receba o orçamento e orientações</li>
                <li>Agende sua sessão mediante sinal</li>
              </ol>
              <div className="cta orcamento-cta">
                <a
                  className="btn btn-primary"
                  href="https://wa.me/558488075719"
                  target="_blank"
                  rel="noreferrer"
                >
                  Fazer orçamento agora
                </a>
              </div>
            </div>
            <div className="card accent">
              <h3>Diferenciais</h3>
              <ul className="list">
                <li>Artes exclusivas</li>
                <li>Atendimento personalizado</li>
                <li>Ambiente seguro e profissional</li>
                <li>Experiência de mais de uma década</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="contato" className="section">
          <div className="container two-col">
            <div>
              <h2>Localização e Contato</h2>
              <p>
                📍 <strong>Pipa</strong> – <strong>Pousada Cata Vento</strong>
                <br />
                Av. Baía dos Golfinhos, S/N - Praia da Pipa, Tibau do Sul - RN,
                59179-000
              </p>
              <div className="map">
                <iframe
                  title="Mapa"
                  src="https://maps.google.com/maps?q=Av.%20Ba%C3%ADa%20dos%20Golfinhos%2C%20S%2FN%20-%20Praia%20da%20Pipa%2C%20Tibau%20do%20Sul%20-%20RN%2C%2059179-000&z=16&output=embed"
                  width="100%"
                  height="260"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            <div className="card">
              <h3>Fale com a gente</h3>

              <div className="cta">
                <a
                  href="https://wa.me/558488075719"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={whatsapp}></img>
                </a>
                <a
                  href="https://www.instagram.com/deliriumtattoo?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={instagram}></img>
                </a>
              </div>
              <a className="btn btn-outline inicio" href="#inicio">
                Voltar ao início
              </a>
            </div>
          </div>
        </section>
        <footer>
          <div className="gap">
            <img src={logo} alt="Delirium Tattoo" className="logo-footer" />

            <p>Não é só tatuagem. É identidade.</p>
            <ul>
              <li>
                <a href="#inicio">Início</a>
              </li>
              <li>
                <a href="#sobre">Sobre</a>
              </li>
              <li>
                {" "}
                <a href="#artistas">Artistas</a>
              </li>
              <li>
                <a href="#curso">Curso</a>
              </li>
              <li>
                {" "}
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
      </main>
    </>
  );
}
