import feedback1 from "../../assets/imagens/feedback1.png";
import feedback2 from "../../assets/imagens/feedback2.png";
import feedback3 from "../../assets/imagens/feedback3.png";

const FEEDBACKS = [
  { src: feedback1, alt: "Feedback 1" },
  { src: feedback2, alt: "Feedback 2" },
  { src: feedback3, alt: "Feedback 3" },
];

export default function Feedbacks() {
  return (
    <section id="feedbacks" className="section">
      <div className="container">
        <h2>Feedbacks</h2>
        <div className="grid-3">
          {FEEDBACKS.map((f) => (
            <div className="card quote" key={f.src}>
              <img src={f.src} alt={f.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
