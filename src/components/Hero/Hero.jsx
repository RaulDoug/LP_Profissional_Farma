import WhatsAppButton from '../WhatsAppButton/WhatsAppButton';
import './Hero.css';

export default function Hero() {
  return (
    <section className='hero'>
      <div className="hero-text">
        <h2 className="hero-title">
          Sua saúde em <span>boas mãos!</span>
        </h2>
        <p className="hero-desc">
          Medicamentos, dermocosméticos e muito mais com entrega rápida e atendimento especializado.
        </p>
      </div>
      <div className="hero-btn">
        <WhatsAppButton
          iconSize='1.6rem'
          className='hero-whats-btn'
        />
        <button className='hero-ofertas-btn'>
          Ver Ofertas
        </button>
      </div>
    </section>
  )
}