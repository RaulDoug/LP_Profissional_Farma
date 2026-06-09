import './OffersSubPage.css';
import { useState, useEffect } from 'react';
import { produtos, dataFinal } from '../../DB/Offers/offersDB';

export default function OffersSubPage() {
  const [tempoRestante, setTempoRestante] = useState(0)

  useEffect(() => {
    const intervalo =  setInterval(() => {
      const agora = new Date();
      const diferenca = dataFinal - agora;
      
      setTempoRestante(diferenca);
    }, 1000)

    return () => clearInterval(intervalo);
  }, [])

  const dias = Math.floor(tempoRestante / (1000 * 60 * 60 * 24));
  const horas = Math.floor((tempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((tempoRestante % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((tempoRestante % (1000 * 60)) / 1000)

  return (
    <section className="offers-sub-page">
      <div className="offers-contador-container">
        <h3>Ofertas válidas por:</h3>
        <div className="offers-contador">
          <span className='contador-tempo border'>
            <h4>{dias}</h4>
            <p>dias</p>
          </span>
          <span className='contador-tempo border'>
            <h4>{horas}</h4>
            <p>horas</p>
          </span>
          <span className='contador-tempo border'>
            <h4>{minutos}</h4>
            <p>min</p>
          </span>
          <span className='contador-tempo'>
            <h4>{segundos}</h4>
            <p>seg</p>
          </span>
        </div>
      </div>
      <div className="offers-list-page-container">
        <ul className="offers-list-page">
          {produtos.map((prod, index) => (
            <li className='offer-list-item' key={index}>
              <div className="offer-item-img">
                <p>{`-${prod.desconto}%`}</p>
                <img src={prod.img} alt={`Imagem do produto ${prod.nome}`} />
              </div>
              <div className="offer-item-desc">
                <h3>{prod.nome}</h3>
                <p>{prod.descricao}</p>
                <div className="item-desc-pedir">
                  <h4>{`R$ ${prod.preco.toFixed(2)}`}</h4>
                  <div className="item-desc-btn">
                    <a href={`https://wa.me/5537998231077?text=${encodeURIComponent(`Olá, vim pelo site e gostaria de pedir o ${prod.nome} ${prod.desc} que esta em promoção pro R$ ${prod.preco}`
                    )}`} target="_blank" className='item-desc-btn-link'>
                      <p>Pedir</p>
                      <i className="fa-brands fa-whatsapp"></i>
                    </a>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}