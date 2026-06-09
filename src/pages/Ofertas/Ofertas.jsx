import CtaSimple from '../../components/CtaSimple/CtaSimple';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import OffersSubPage from '../../components/OffersSubPage/OffersSubPage';
import TitleSubPages from '../../components/TitleSubPages/TitleSubPages';

export default function Ofertas() {
  return (
    <>
      <Header />
      <TitleSubPages 
        title='Ofertas da semana'
        subtitle='Aproveite os descontos especiais!'
      />
      <OffersSubPage />
      <CtaSimple />
      <Footer />
    </>
  )
}