import './Footer.css';
import logoFarma from '../../assets/images/logoFarma.png';
import bandeiras from '../../assets/images/bandeiras.png';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      <div className="footer-logo">
        <img src={logoFarma} alt="Logo Farmácia" />
      </div>
      <div className="footer-nav list-container">
        <h2 className="footer-nav-title">
          Institucional
        </h2>
        <ul className="footer-nav-list">
          <li className="footer-nav-item">
            <Link to="/sobre">Sobre nós</Link>
          </li>
          <li className="footer-nav-item">
            <Link to="/ofertas">Promoções</Link>
          </li>
          <li className="footer-nav-item">
            <Link to="/contato">Contato</Link>
          </li>
          <li className="footer-nav-item">
            <Link to="mailto:farmacia@email.com.br" target="_blank">Trabalhe conosco</Link>
          </li>
        </ul>
      </div>
      <div className="footer-category list-container">
        <h2 className="footer-category-title">
          Categorias
        </h2>
        <ul className="footer-category-list">
          <li className="footer-category-item">
            <Link to="#">Medicamentos</Link>
          </li>
          <li className="footer-category-item">
            <Link to="#">Dermocosméticos</Link>
          </li>
          <li className="footer-category-item">
            <Link to="#">Vitaminas</Link>
          </li>
          <li className="footer-category-item">
            <Link to="#">Infantil</Link>
          </li>
          <li className="footer-category-item">
            <Link to="#">Higiene</Link>
          </li>
          <li className="footer-category-item">
            <Link to="#">Conveniência</Link>
          </li>
        </ul>
      </div>
      <div className="footer-contato list-container">
        <h2 className="footer-contato-title">
          Atendimento
        </h2>
        <ul className="footer-contato-list">
          <li className="footer-contato-item">
            <Link to="tel:+553735223522">
              <i className="fa-solid fa-phone"></i>
              (37) 3522-3522
            </Link>
          </li>
          <li className="footer-contato-item">
            <Link to="https://wa.me/5537998231077" target="_blank">
              <i className="fa-brands fa-whatsapp"></i>
              (37) 99999-9999
            </Link>
          </li>
          <li className="footer-contato-item">
            <Link to="mailto:farmacia@email.com.br" target="_blank">
              farmacia@email.com.br
            </Link>
          </li>
          <li className="footer-contato-item">
            <p>Seg - Sab 8h as 22h</p>
          </li>
        </ul>
      </div>
      <div className="footer-socials list-container">
        <h2 className="footer-socials-title">
          Nós siga
        </h2>
        <div className="footer-socials-list">
          <Link to="https://www.facebook.com/" target="_blank">
            <i className="fa-brands fa-square-instagram"></i>
          </Link>
          <Link to="https://www.instagram.com/" target="_blank">
            <i className="fa-brands fa-square-facebook"></i>
          </Link>
        </div>
      </div>
      <div className="footer-pay list-container">
        <h2 className="footer-pay-title">
          Formas de pagamento
        </h2>
        <img src={bandeiras} alt="Bandeiras aceitas" />
      </div>
    </footer>
  )
}