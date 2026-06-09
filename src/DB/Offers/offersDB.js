import tylenolSinus from './ImgProdutos/tylenolSinus.jpg';
import cimegrip from './ImgProdutos/cimegripe.jpg';
import cremeNivea from './ImgProdutos/cremeNivea.webp';
import lavitanAZ from './ImgProdutos/lavitanAz.png';
import fraldaPampers from './ImgProdutos/fraldaPampers.png';

const dataFinal = new Date('2026-06-15T23:59:59');

const produtos = [
  {
    nome: 'Tylenol Sinus',
    descricao: '20 comprimidos',
    img: tylenolSinus,
    preco: 19.90,
    desconto: 30
  },
  {
    nome: 'Cimegrip',
    descricao: '20 comprimidos',
    img: cimegrip,
    preco: 16.90,
    desconto: 52
  },
  {
    nome: 'Creme Nivea',
    descricao: '200ml',
    img: cremeNivea,
    preco: 23.99,
    desconto: 10
  },
  {
    nome: 'Lavitan AZ',
    descricao: '60 capsulas',
    img: lavitanAZ,
    preco: 29.90,
    desconto: 15
  },
  {
    nome: 'Fralda Pampers',
    descricao: 'Confot Sec',
    img: fraldaPampers,
    preco: 59.90,
    desconto: 20
  }
]

export { produtos, dataFinal };