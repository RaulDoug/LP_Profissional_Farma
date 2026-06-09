import './MedList.css'
import medDb from '../../DB/Medicamentos/MedDb.js';
import { useState } from 'react';
import TitleSubPages from '../TitleSubPages/TitleSubPages.jsx';


export default function MedList() {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('todos');
  const [busca, setBusca] = useState('');

  const produtosFiltrados = medDb.filter((produto) => {
    const categoriaValida = 
      categoriaSelecionada === 'todos' ||
        produto.category === categoriaSelecionada;

    const normalizarTexto = (texto) =>
      texto
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');

    const buscaValida =
      normalizarTexto(produto.nome).toLocaleLowerCase().includes(normalizarTexto(busca).toLocaleLowerCase()) ||
      normalizarTexto(produto.desc).toLocaleLowerCase().includes(normalizarTexto(busca).toLocaleLowerCase());

    return categoriaValida && buscaValida
  })
    


  return (
    <section className="med-list">
      <TitleSubPages 
        title='Produtos'
        subtitle='Encontre os melhores produtos com os melhores preços'
      />
      <div className="med-search">
        <div className="med-input-container">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input 
            type="text" 
            placeholder='Buscar medicamentos' 
            value={busca} 
            onChange={(e) => setBusca(e.target.value)}
          />
        </div>
      </div>
      <div className="prod-category">
        <h3 className="prod-category-title">
          Categorias
        </h3>
        <div className="prod-category-list">
          <button className={`prod-category-btn ${
            categoriaSelecionada === 'todos' ? 'active' : ''}`} 
            onClick={() => setCategoriaSelecionada('todos')}
          >
            <div className="prod-category-btn-icon-container">
              <i className="fa-solid fa-filter-circle-xmark"></i>
            </div>
            <p>Todos</p>
          </button>
          <button 
            className={`prod-category-btn ${categoriaSelecionada === 'medicamento' ? 'active' : ''}`}
            onClick={() => setCategoriaSelecionada('medicamento')}
          >
            <div className="prod-category-btn-icon-container">
              <i className="fa-solid fa-pills"></i>
            </div>
            <p>Medicamentos</p>
          </button>
          <button 
            className={`prod-category-btn ${categoriaSelecionada === 'dermocosmeticos' ? 'active' : ''}`} 
            onClick={() => setCategoriaSelecionada('dermocosmeticos')}
          >
            <div className="prod-category-btn-icon-container">
              <i className="fa-solid fa-spray-can"></i>
            </div>
            <p>Dermo</p>
          </button>
          <button 
            className={`prod-category-btn ${categoriaSelecionada === 'vitamina' ? 'active' : ''}`} 
            onClick={() => setCategoriaSelecionada('vitamina')}
          >
            <div className="prod-category-btn-icon-container">
              <i className="fa-solid fa-prescription-bottle-medical"></i>
            </div>
            <p>Vitaminas</p>
          </button>
          <button 
            className={`prod-category-btn ${categoriaSelecionada === 'infantil' ? 'active' : ''}`} 
            onClick={() => setCategoriaSelecionada('infantil')}
          >
            <div className="prod-category-btn-icon-container">
              <i className="fa-solid fa-baby"></i>
            </div>
            <p>Infantil</p>
          </button>
          <button 
            className={`prod-category-btn ${categoriaSelecionada === 'higiene' ? 'active' : ''}`} 
            onClick={() => setCategoriaSelecionada('higiene')}
          >
            <div className="prod-category-btn-icon-container">
              <i className="fa-solid fa-soap"></i>
            </div>
            <p>Higiene</p>
          </button>
        </div>
      </div>
      <div className="med-list-itens">
        <h2>Mais vendidos</h2>
        <ul className="prod-list">
          {produtosFiltrados.map((prod, index) => (
            <li className="prod-item" key={index}>
              <div className="prod-img">
                <img src={prod.img} alt={`Foto do produto ${prod.nome}`} />
              </div>
              <div className="prod-desc">
                <h3>{prod.nome}</h3>
                <p>{prod.desc}</p>
                <div className="prod-link">
                  <a href={`https://wa.me/5537998231077?text=${encodeURIComponent(`Olá, vim pelo site e gostaria de pedir o ${prod.nome} ${prod.desc}`
                  )}`} target="_blank" className='prod-desc-btn'>
                    <p>Pedir</p>
                    <i className="fa-brands fa-whatsapp"></i>
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}