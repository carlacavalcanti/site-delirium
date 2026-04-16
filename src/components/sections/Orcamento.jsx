export default function Orcamento() {
  return (
    <section id="orcamento" className="section">
      <div className="container two-col">
        <div>
          <h2>Como funciona o orçamento</h2>

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
  );
}
