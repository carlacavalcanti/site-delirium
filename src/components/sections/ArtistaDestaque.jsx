import foto from "../../assets/imagens/dido.jpeg";

export default function ArtistaDestaque() {
  return (
    <section id="artistas" className="section">
      <div className="container artista-destaque">
        <div className="card artista-destaque__texto">
          <h2>Dido – Tattoo Artist</h2>
          <p>
            Com mais de 16 anos de experiência, Dido construiu uma trajetória
            baseada em evolução constante, técnica refinada e identidade
            artística forte. Destaque para o trabalho em{" "}
            <strong>free hand</strong>.
          </p>
          <p>
            Começou a tatuar em Pipa em 2010 e hoje também ajuda novas pessoas a
            iniciarem na área, abrindo espaço em um mercado que antigamente era
            mais difícil.
          </p>
        </div>
        <div className="artista-destaque__foto-shell">
          <img src={foto} alt="Dido, tattoo artist" className="dido" />
        </div>
      </div>
    </section>
  );
}
