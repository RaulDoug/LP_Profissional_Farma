import './Cta.css'
import entregador from '../../assets/images/entregador.png'
import rota from '../../assets/images/rota.png'
import WhatsAppButton from '../WhatsAppButton/WhatsAppButton'

export default function Cta() {
  return (
    <section className="cta">
      <div className="cta-img">
        <img src={entregador} alt="Emogi de entregador em uma moto" />
      </div>
      <div className="cta-desc">
        <h2 className="cta-title">Entrega rápida e segura em toda a cidade</h2>
        <p className="cta-sub">Peça agora e receba no conforto da sua casa</p>
      </div>
      <div className="cta-btn-container">
        <WhatsAppButton 
          className='cta-btn'
        />
      </div>
      <div className="cta-map-container">
        <img src={rota} alt="Exemplo de rota" />
      </div>
    </section>
  )
}