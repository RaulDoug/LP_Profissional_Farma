import { useRef, useEffect } from 'react';
import './Offers.css';
import { produtos } from '../../DB/Offers/offersDB.js';
import {
  scrollRight,
  scrollLeft,
  iniciarAutoPlay,
  handleUserInteraction,
  handleMouseDown,
  handleMouseMove,
  handleMouseUp,
  handleTouchStart,
  handleTouchMove,
  handleTouchEnd
} from './CarrosselFunctions.js';

export default function Offers() {
  const listRef = useRef(null);
  const autoPlayRef = useRef(null);
  const pauseTimeoutRef = useRef(null);

  const isDragging = useRef(false);
  const startX = useRef(0);
  const startScrollLeft = useRef(0);

  const refs = {
    listRef,
    autoPlayRef,
    pauseTimeoutRef,
    isDragging,
    startX,
    startScrollLeft
  };

  const settings = {
    endValue: 0,
    autoPlayDelay: 4000,
    pauseDelay: 15000,
    listLenght: 20,
    itemSelector: '.offer-item'
  }

  const config = {
    ...refs,
    ...settings
  }

  useEffect(() => {
    iniciarAutoPlay(config);
  
    return () => {
      clearInterval(autoPlayRef.current);
      clearTimeout(pauseTimeoutRef.current);
    };
  }, []);

  return (
    <section className="offers">
      <div className="offers-top">
        <h4 className="offers-title">Ofertas <span>da semana</span></h4>
        <a href="#" className="offers-link">Ver todas</a>
      </div>
      <div className="offers-list-container">
        <button className="arrow left" onClick={() => {
          scrollLeft(config);
          handleUserInteraction(config);
        }}>
          <i className="fa-solid fa-angle-left"></i>
        </button>
        <ul className="offers-list" 
          ref={listRef}
          onMouseDown={(e) => {
            handleMouseDown(e,config)
          }}
          onMouseMove={(e) => {
            handleMouseMove(e,config)
          }}
          onMouseUp={() => {handleMouseUp(config)}}
          onMouseLeave={() => {handleMouseUp(config)}}
          onTouchStart={(e) => {
            handleTouchStart(e, config)
          }}
          onTouchMove={(e) => {
            handleTouchMove(e, config)
          }}
          onTouchEnd={() => {handleTouchEnd(config)}}
        >
          {produtos.map((produtos, index) => (
            <li className="offer-item" key={index} onClick={() => {
              handleUserInteraction(config)
            }}>
              <div className="item-img">
                <p>{`-${produtos.desconto}%`}</p>
                <img src={produtos.img} alt={produtos.nome} />
              </div>
              <div className="item-desc">
                <div className="item-desc-top">
                  <h4>{produtos.nome}</h4>
                  <p>{produtos.descricao}</p>
                </div>
                <div className="item-desc-bottom">
                  <p className="item-desc-price">{`R$ ${produtos.preco.toFixed(2)}`}</p>
                  <a 
                  href={`https://wa.me/5537998231077?text=${encodeURIComponent(`Olá, gostaria de pedir o ${produtos.nome} ${produtos.descricao} por R$ ${produtos.preco.toFixed(2)}, que está em oferta no site.`
                  )}`} target="_blank" className="item-desc-link">
                    <p>Peça agora</p>
                    <i className="fa-solid fa-cart-shopping"></i>
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <button className="arrow right" onClick={() => {
          scrollRight(config);
          handleUserInteraction(config);
        }}>
          <i className="fa-solid fa-angle-right"></i>
        </button>
      </div>
    </section>
  )
}