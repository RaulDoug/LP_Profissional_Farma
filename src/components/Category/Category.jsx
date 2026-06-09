import './Category.css';
import medicamentos from '../../assets/images/medicamentos.png';
import dermocosmeticos from '../../assets/images/dermocosmeticos.png';
import vitaminas from '../../assets/images/vitaminas.png';
import infantil from '../../assets/images/infantil.png';
import higiene from '../../assets/images/higiene.png';
import conveniencia from '../../assets/images/conveniencia.png';

export default function Category() {
  return (
    <section className='category'>
      <h2 className='category-title'>Nossas <span>categorias</span></h2>
      <ul className="category-list">
        <li className="category-list-item">
          <div className="category-img">
            <img src={medicamentos} alt="Medicamentos" />
          </div>
          <div className="category-text">
            <h4>Medicamentos</h4>
            <a href="#">Ver mais</a>
          </div>
        </li>
        <li className="category-list-item">
          <div className="category-img">
            <img src={dermocosmeticos} alt="Dermocosméticos" />
          </div>
          <div className="category-text">
            <h4>Dermocosméticos</h4>
            <a href="#">Ver mais</a>
          </div>
        </li>
        <li className="category-list-item">
          <div className="category-img">
            <img src={vitaminas} alt="Vitaminas" />
          </div>
          <div className="category-text">
            <h4>Vitaminas</h4>
            <a href="#">Ver mais</a>
          </div>
        </li>
        <li className="category-list-item">
          <div className="category-img">
            <img src={infantil} alt="Infantil" />
          </div>
          <div className="category-text">
            <h4>Infantil</h4>
            <a href="#">Ver mais</a>
          </div>
        </li>
        <li className="category-list-item">
          <div className="category-img">
              <img src={higiene} alt="Higiene" />
          </div>
          <div className="category-text">
            <h4>Higiene</h4>
            <a href="#">Ver mais</a>
          </div>
        </li>
        <li className="category-list-item">
          <div className="category-img">
            <img src={conveniencia} alt="Conveniência" />
          </div>
          <div className="category-text">
            <h4>Conveniência</h4>
            <a href="#">Ver mais</a>
          </div>
        </li>
      </ul>
    </section>
  )
}