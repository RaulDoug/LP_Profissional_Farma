import './Location.css';
import locMap from '../../assets/images/locMap.png'

export default function Location() {
  return (
    <section className='location'>
      <h2 className="location-title">
        Onde <span>estamos</span>
      </h2>
      <p className="location-desc">
        Visite nosssa loja física e encontre medicamentos, dermocosméticos e atendimento especializado.
      </p>
      <div className="location-map">
        <img src={locMap} alt="Localização empresa" />
        <a
          href="https://maps.app.goo.gl/8FHBecTH1QRGmEsK6"
          target="_blank"
          rel="noopener noreferrer"
          className="location-map-link"
          aria-label="Abrir localização no Google Maps"
        />
      </div>
      <ul className="location-info-list">
        <li className="loc-item-list loc">
          <div className="loc-icon-container">
            <i className="fa-solid fa-location-dot"></i>
          </div>
          <div className="loc-text-container">
            <p className="loc-text-top">
              Rua da Farmácia 123 - Centro
            </p>
            <p className="loc-text-bottom">
              Bom Despacho - MG
            </p>
          </div>
          <a
            href="https://maps.app.goo.gl/8FHBecTH1QRGmEsK6"
            target="_blank"
            rel="noopener noreferrer"
            className="location-map-link"
            aria-label="Abrir localização no Google Maps"
          />
        </li>
        <li className="loc-item-list">
          <div className="loc-icon-container">
            <i className="fa-regular fa-clock"></i>
          </div>
          <div className="loc-text-container">
            <p className="loc-text-top">
              Segunda a Sábado
            </p>
            <p className="loc-text-bottom">
              08h às 22h
            </p>
          </div>
        </li>
        <li className="loc-item-list loc" >
          <div className="loc-icon-container">
            <i className="fa-brands fa-whatsapp"></i>
          </div>
          <p className="loc-text-top">
            (37) 99999-9999
          </p>
          <a
            href='https://wa.me/5537998231077'
            target="_blank"
            rel="noopener noreferrer"
            className="location-map-link"
            aria-label="Abrir localização no Google Maps"
          />
        </li>
      </ul>
    </section>
  )
}