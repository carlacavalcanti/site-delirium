import { useCallback, useRef } from "react";
import adaga from "../../assets/imagens/adaga.jpeg";
import colorbranco from "../../assets/imagens/colorbranco.jpeg";
import colorida from "../../assets/imagens/colorida.jpeg";
import maori from "../../assets/imagens/maori.jpeg";
import sanscrito from "../../assets/imagens/sanscrito.jpeg";
import vermelha from "../../assets/imagens/vermelha.jpeg";
import mandala from "../../assets/imagens/mandala.jpeg";
import setadireita from "../../assets/icons/direita.svg";
import setaesquerda from "../../assets/icons/esquerda.svg";

const ARTES = [
  { src: adaga, alt: "Tatuagem neotraditional", label: "Neotraditional" },
  {
    src: mandala,
    alt: "Tatuagem ornamental com simetria orgânica",
    label: "Ornamental com simetria orgânica",
  },
  { src: colorbranco, alt: "Tatuagem neotraditional", label: "Neotraditional" },
  { src: colorida, alt: "Tatuagem full color", label: "Full color" },
  { src: maori, alt: "Tatuagem maori", label: "Maori" },
  { src: sanscrito, alt: "Tatuagem lettering", label: "Lettering", imgClassName: "card5" },
  { src: vermelha, alt: "Tatuagem fine line", label: "Fine line" },
];

export default function ArtesCarousel() {
  const cardsRef = useRef(null);

  const scroll = useCallback((direction) => {
    const container = cardsRef.current;
    if (!container) return;

    const scrollAmount = 300;
    container.scrollBy({
      left: direction === "esquerda" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  }, []);

  return (
    <section id="artes" className="section">
      <div className="container wrapper">
        <h2>Artes</h2>

        <button className="seta esquerda" onClick={() => scroll("esquerda")} type="button">
          <img src={setaesquerda} alt="Rolar para a esquerda" />
        </button>

        <div className="cards" ref={cardsRef}>
          {ARTES.map((arte) => (
            <div className="card-img" key={`${arte.label}-${arte.src}`}>
              <img src={arte.src} alt={arte.alt} className={arte.imgClassName} />
              <p>{arte.label}</p>
            </div>
          ))}
        </div>

        <button className="seta direita" onClick={() => scroll("direita")} type="button">
          <img src={setadireita} alt="Rolar para a direita" />
        </button>
      </div>
    </section>
  );
}
