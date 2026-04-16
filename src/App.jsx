import Navbar from "./components/Navbar.jsx";
import Hero from "./components/sections/Hero.jsx";
import Sobre from "./components/sections/Sobre.jsx";
import ArtistaDestaque from "./components/sections/ArtistaDestaque.jsx";
import Curso from "./components/sections/Curso.jsx";
import ArtesCarousel from "./components/sections/ArtesCarousel.jsx";
import Feedbacks from "./components/sections/Feedbacks.jsx";
import Orcamento from "./components/sections/Orcamento.jsx";
import Contato from "./components/sections/Contato.jsx";
import Footer from "./components/sections/Footer.jsx";

export default function App() {
  return (
    <>
      <Navbar />

      <main id="inicio">
        <Hero />
        <Sobre />
        <ArtistaDestaque />
        <Curso />
        <ArtesCarousel />
        <Feedbacks />
        <Orcamento />
        <Contato />
        <Footer />
      </main>
    </>
  );
}
