export default function Sobre() {
  return (
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
            jornada tatuando em Pipa, desenvolvendo sua técnica, estilo e visão
            artística ao longo dos anos.
          </p>
          <p>
            Hoje, com mais de 16 anos de experiência, o estúdio se destaca pela
            criação de artes autorais e exclusivas, sempre respeitando a
            identidade de cada cliente.
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
            Cada projeto é desenvolvido de forma exclusiva, respeitando a ideia
            e a identidade de quem carrega a tatuagem.
          </p>
        </div>
      </div>
    </section>
  );
}
