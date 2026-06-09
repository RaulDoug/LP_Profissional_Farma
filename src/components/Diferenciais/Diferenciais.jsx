import './Diferenciais.css'

export default function Diferenciais() {
  return (
    <section className='dif'>
      <ul className="dif-list">
        <li className="dif-item">
          <div className="dif-item-icon">
            <i className="fa-solid fa-truck-fast"></i>
          </div>
          <div className="dif-item-desc">
            <p>Entrega rápida</p>
            <p>em até 60 minutos</p>
          </div>
        </li>
        <li className="dif-item">
          <div className="dif-item-icon">
            <i className="fa-solid fa-user-doctor"></i>
          </div>
          <div className="dif-item-desc">
            <p>Atendimento</p>
            <p>farmacêutico</p>
          </div>
        </li>
        <li className="dif-item">
          <div className="dif-item-icon">
            <i className="fa-solid fa-circle-check"></i>
          </div>
          <div className="dif-item-desc">
            <p>Produtos</p>
            <p>100% originais</p>
          </div>
        </li>
        <li className="dif-item">
          <div className="dif-item-icon">
            <i className="fa-solid fa-percent"></i>
          </div>
          <div className="dif-item-desc">
            <p>Melhores descontos</p>
            <p>da região</p>
          </div>
        </li>
        <li className="dif-item">
          <div className="dif-item-icon">
            <i className="fa-solid fa-credit-card"></i>
          </div>
          <div className="dif-item-desc">
            <p>Parcelamento</p>
            <p>em até 6x</p>
          </div>
        </li>
        <li className="dif-item">
          <div className="dif-item-icon">
            <i className="fa-solid fa-heart-pulse"></i>
          </div>
          <div className="dif-item-desc">
            <p>Programas de</p>
            <p>Fidelidade</p>
          </div>
        </li>
      </ul>
    </section>
  )
}