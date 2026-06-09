import { useEffect, useRef } from 'react';
import './Testimonials.css';
import { avaliacoes } from '../../DB/Testimonials/testimonialsDb.js';
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
} from '../Offers/CarrosselFunctions.js';

export default function Testimonials() {
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
    itemSelector: '.testimonials-item'
  }

  const config  = {
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
    <section className="testimonials">
      <h2 className="testimonials-title">
        O que nossos clientes dizem
      </h2>
      <div className="testimonials-list-container">
        <button className="arrow left" onClick={() => {
          scrollLeft(config);
          handleUserInteraction(config);
        }}>
          <i className="fa-solid fa-angle-left"></i>
        </button>
        <ul className="testimonials-list"
          ref={listRef}
          onMouseDown={(e) => {
            handleMouseDown(e, config)
          }}
          onMouseMove={(e) => {
            handleMouseMove(e, config)
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
          {avaliacoes.map((item, index) => (
            <li className="testimonials-item" key={index} onClick={() => {
              handleUserInteraction(config)
            }}>
              <div className="test-item-top">
                <i className="fa-solid fa-star"></i>
                <p>{`${item.stars.toFixed(1)}`}</p>
              </div>
              <div className="test-item-bottom">
                <p className="test-text">
                  {`"${item.text}"`}
                </p>
                <p className="test-name">
                  {item.name}
                </p>
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