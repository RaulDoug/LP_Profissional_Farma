import './AboutSub.css';
import fachadaFarma from '../../assets/images/fachadaFarma.png';

export default function AboutSub() {
  return (
    <section className="about-sub">
      <div className="about-sub-text">
        <h2>Nossa história</h2>
        <p>
          Há mais de uma década, a Farma Vida nasceu com um propósito simples: cuidar da saúde e do  bem-estar das famílias da nossa comunidade com dedicação, confiança e atendimento humanizado.

          Ao longo dos anos, construímos uma relação próxima com nossos clientes, oferecendo medicamentos, produtos de saúde, higiene e cuidados pessoais com qualidade garantida e preços acessíveis. Mais do que uma farmácia, buscamos ser um ponto de apoio para quem valoriza atendimento atencioso, orientação responsável e soluções para o dia a dia.

          Nossa equipe está sempre pronta para receber você com respeito, cordialidade e o compromisso de proporcionar uma experiência segura e acolhedora. Na Farma Vida, acreditamos que cuidar da saúde é também cuidar das pessoas.
        </p>
      </div>
      <div className="about-sub-img">
        <img src={fachadaFarma} alt="Fachada da FarmaVida" />
      </div>
       <div className="about-sub-destaque">
          <div className="about-sub-item">
            <div className="about-item-icon-container">
              <i className="fa-solid fa-heart-pulse"></i>
            </div>
            <div className="about-item-text-container">
              <h4>Missão</h4>
              <p>
                Cuidar da saúde e do bem-estar das pessoas com atendimento de qualidade, confiança e dedicação.
              </p>
            </div>
          </div>
          <div className="about-sub-item">
            <div className="about-item-icon-container">
              <i className="fa-solid fa-eye"></i>
            </div>
            <div className="about-item-text-container">
              <h4>Visão</h4>
              <p>
                Ser a farmácia de referência na região, reconhecida pela excelência e proximidade com os clientes.
              </p>
            </div>
          </div>
          <div className="about-sub-item">
            <div className="about-item-icon-container">
              <i className="fa-solid fa-scale-balanced"></i>
            </div>
            <div className="about-item-text-container">
              <h4>Valores</h4>
              <p>
                Ética, respeito, transparência, compromisso com a saúde e valorização das pessoas.
              </p>
            </div>
          </div>
        </div>
    </section>
  )
}