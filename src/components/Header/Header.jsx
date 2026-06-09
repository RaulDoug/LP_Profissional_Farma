import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Header.css';
import logoFarma from '../../assets/images/logoFarma.png'
import WhatsAppButton from '../WhatsAppButton/WhatsAppButton';

export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <>
      <header className='header'>
        <Link to="/" className="header-logo">
          <img src={logoFarma} alt="Logo Farmácia" className='logo-farma'/>
        </Link>

        <div className="navegation">
          <Link to="/" className="navegation-item">
            Início
          </Link>
          <Link to="/produtos" className="navegation-item">
            Produtos
          </Link>
          <Link to="/ofertas" className="navegation-item">
            Ofertas
          </Link>
          <Link to="/sobre" className="navegation-item">
            Sobre nós
          </Link>
          <Link to="/contato" className="navegation-item">
            Contato
          </Link>
        </div>

        <WhatsAppButton
          width='90%'
          textsize='1rem'
          iconSize='1.4rem'
          className='whats-desktop'
        />

        <button 
          className='menu-btn'
          onClick={() => setMenuAberto(!menuAberto)}
        >
          <i className="fa-solid fa-bars"></i>
        </button>
      </header>
      
      {menuAberto && (
        <div
          className="overlay"
          onClick={() => setMenuAberto(false)}
        ></div>
      )}

      <aside className={menuAberto ? 'sidebar open' : 'sidebar'}>
        <div className="sidebar-top">
          <img src={logoFarma} alt="Logo Farmácia" className='logo-farma nav'/>
          <button
            className='menu-btn'
            onClick={() => setMenuAberto(!menuAberto)}
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        <div className="sidebar-nav">
          <Link to="/" className="sidebar-link" onClick={() => setMenuAberto(false)}>
            <div className="side-link-icon">
              <i className="fa-solid fa-house"></i>
            </div>
            <p>Início</p>
          </Link>
          <Link to="/produtos" className="sidebar-link" onClick={() => setMenuAberto(false)}>
            <div className="side-link-icon">
              <i className="fa-solid fa-prescription-bottle-medical"></i>
            </div>
            <p>Produtos</p>
          </Link>
          <Link to="/ofertas" className="sidebar-link" onClick={() => setMenuAberto(false)}>
            <div className="side-link-icon">
              <i className="fa-solid fa-percent"></i>
            </div>
            <p>Ofertas</p>
          </Link>
          <Link to="/sobre" className="sidebar-link" onClick={() => setMenuAberto(false)}>
            <div className="side-link-icon">
              <i className="fa-solid fa-user-group"></i>
            </div>
            <p>Sobre nós</p>
          </Link>
          <Link to="/contato" className="sidebar-link" onClick={() => setMenuAberto(false)}>
            <div className="side-link-icon">
              <i className="fa-solid fa-phone"></i>
            </div>
            <p>Contato</p>
          </Link>
        </div>
        <div className="sidebar-destaques">
          <ul className="dtq-list">
            <li className="dtq-item">
              <div className="dtq-icon-container">
                <i className="fa-solid fa-truck-fast"></i>
              </div>
              <div className="dtq-text">
                <h4>Entrega rápida</h4>
                <p>em até 60 minutos</p>
              </div>
            </li>
            <li className="dtq-item">
              <div className="dtq-icon-container">
                <i className="fa-solid fa-user-doctor"></i>
              </div>
              <div className="dtq-text">
                <h4>Atendimento</h4>
                <p>especializado</p>
              </div>
            </li>
            <li className="dtq-item">
              <div className="dtq-icon-container">
                <i className="fa-solid fa-circle-check"></i>
              </div>
              <div className="dtq-text">
                <h4>Produtos 100%</h4>
                <p>originais</p>
              </div>
            </li>
            <li className="dtq-item">
              <div className="dtq-icon-container">
                <i className="fa-solid fa-credit-card"></i>
              </div>
              <div className="dtq-text">
                <h4>Parcelamento</h4>
                <p>em até 6x</p>
              </div>
            </li>
            <li className="dtq-item">
              <div className="dtq-icon-container">
                <i className="fa-solid fa-percent"></i>
              </div>
              <div className="dtq-text">
                <h4>Programa de</h4>
                <p>fidelidade</p>
              </div>
            </li>
          </ul>
        </div>

        <WhatsAppButton
          width='90%'
          textsize='1rem'
          iconSize='1.6rem'
        />
      </aside>
    </>
    
  )
}