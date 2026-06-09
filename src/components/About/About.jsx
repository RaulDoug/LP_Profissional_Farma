import './About.css';

export default function About() {
  return (
    <section className="about">
      <div className="about-top">
        <h2 className="about-title">
          Sobre a <span>FarmaVida</span>
        </h2>
        <p className="about-desc">
          Há mais de 15 anos cuidando da saúde e bem-estar da nossa comunidade. Aqui você encontra qualiade, preço justo e um atendimento que faz a diferença.
        </p>
        <a href="#" className="about-link">
          Saiba mais
        </a>
      </div>
      <div className="about-destaques">
        <div className="about-destaque-item">
          <h3>15+</h3>
          <p>Anos de história</p>
        </div>
        <div className="about-destaque-item azul">
          <h3>10K+</h3>
          <p>Clientes satisfeitos</p>
        </div>
        <div className="about-destaque-item azul">
          <h3>20+</h3>
          <p>Colaboradores</p>
        </div>
        <div className="about-destaque-item">
          <h3>100%</h3>
          <p>Compromisso com você</p>
        </div>
      </div>
    </section>
  )
}