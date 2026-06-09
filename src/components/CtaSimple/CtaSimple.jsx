import WhatsAppButton from '../WhatsAppButton/WhatsAppButton';
import './CtaSimple.css';

export default function CtaSimple() {
  return (
    <section className='cta-simple'>
      <div className="cta-simple-container">
        <div className="cta-simple-text">
          <h2>
            Precisa de medicamento sem sair de casa?
          </h2>
          <p>Fale agora com a gente pelo WhatsApp</p>
        </div>
        <WhatsAppButton 
          className='cta-simple-btn'
        />
      </div>
    </section>
  )
}