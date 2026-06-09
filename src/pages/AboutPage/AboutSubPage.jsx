import AboutSub from '../../components/AboutSub/AboutSub';
import CtaSimple from '../../components/CtaSimple/CtaSimple';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import TitleSubPages from '../../components/TitleSubPages/TitleSubPages';

export default function AboutSubPage() {
  return (
    <>
      <Header />
      <TitleSubPages 
        title='Sobre nós'
        subtitle='Contando um pouco sobre nós e nossa história'
      />
      <AboutSub />
      <CtaSimple />
      <Footer />
    </>
  )
}