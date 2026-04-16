import instagram from "../../assets/icons/instacolorido.png";
import whatsapp from "../../assets/icons/wppverde.png";

export default function Contato() {
  return (
    <section id="contato" className="section">
      <div className="container contato-layout">
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2481889527144!2d-35.048560825009616!3d-6.230976393757172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b28fe4491a6801%3A0x9dc84789641b95fe!2sHostel%20e%20Co-living%20Catavento%20da%20Pipa!5e0!3m2!1sen!2sbr!4v1775348264997!5m2!1sen!2sbr"
              width="100%"
              height="260"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa: Delirium Studio (Pipa)"
            />
          </div>
        </div>
        <div className="card flex">
          <h3>Fale com a gente</h3>

          <div className="cta">
            <a href="https://wa.me/558488075719" target="_blank" rel="noreferrer">
              <img src={whatsapp} alt="WhatsApp" />
            </a>
            <a
              href="https://www.instagram.com/deliriumtattoo?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noreferrer"
            >
              <img src={instagram} alt="Instagram" />
            </a>
          </div>
        </div>
        <a className="btn btn-outline inicio" href="#inicio">
          Voltar ao início
        </a>
      </div>
    </section>
  );
}
