import './ContatoSub.css';
import locMap from '../../assets/images/locMap.png'

export default function ContatoSub() {
  return (
    <section className="contato-sub">
      <div className="contato-sub-desc">
        <ul className="contato-sub-desc-list">
          <li className="contato-sub-item">
            <a href="tel:+553735223522" className="contato-sub-item-link">
              <div className="contato-icon-container">
                <i className="fa-solid fa-phone"></i>
              </div>
              <p>(37) 3522-3522</p>
            </a>
          </li>
          <li className="contato-sub-item">
            <a href="https://wa.me/5537998231077" className="contato-sub-item-link">
              <div className="contato-icon-container">
                <i className="fa-brands fa-whatsapp"></i>
              </div>
              <p>(37) 99999-9999</p>
            </a>
          </li>
          <li className="contato-sub-item">
            <a href="mailto:farmacia@email.com.br" className="contato-sub-item-link">
              <div className="contato-icon-container">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <p>farmacia@email.com.br</p>
            </a>
          </li>
          <li className="contato-sub-item">
            <a href="mailto:farmacia@email.com.br" className="contato-sub-item-link">
              <div className="contato-icon-container">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <div className="contato-text-container">
                <p className="contato-text-top">
                  Rua da Farmácia 123 - Centro
                </p>
                <p className="contato-text-bottom">
                  Bom Despacho - MG
                </p>
              </div>
            </a>
          </li>
          <li className="contato-sub-item">
            <a href="mailto:farmacia@email.com.br" className="contato-sub-item-link">
              <div className="contato-icon-container">
                <i className="fa-solid fa-clock"></i>
              </div>
              <div className="contato-text-container">
                <p className="contato-text-top">
                  Segunda a Sábado
                </p>
                <p className="contato-text-bottom">
                  08h às 22h
                </p>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <div className="contato-map-container">
        <h4>Onde nos encontrar</h4>
        <div className="location-map contato">
          <img src={locMap} alt="Localização empresa" />
          <a
            href="https://maps.app.goo.gl/8FHBecTH1QRGmEsK6"
            target="_blank"
            rel="noopener noreferrer"
            className="location-map-link contato"
            aria-label="Abrir localização no Google Maps"
          />
        </div>
      </div>
    </section>
  )
}