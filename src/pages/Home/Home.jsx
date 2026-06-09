import About from '../../components/About/About.jsx';
import Category from '../../components/Category/Category.jsx';
import Cta from '../../components/Cta/Cta.jsx';
import Diferenciais from '../../components/Diferenciais/Diferenciais.jsx';
import Header from '../../components/Header/Header.jsx';
import Hero from '../../components/Hero/Hero.jsx';
import Offers from '../../components/Offers/Offers.jsx';
import Testimonials from '../../components/Testimonials/Testimonials.jsx';
import Location from '../../components/Location/Location.jsx';
import CtaSimple from '../../components/CtaSimple/CtaSimple.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import WhatsAppFlutuante from '../../components/WhasAppFlutuante/WhatsAppFlutuante.jsx';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Diferenciais />
      <Category />
      <Offers />
      <Cta />
      <About />
      <Location />
      <Testimonials />
      <CtaSimple />
      <WhatsAppFlutuante />
      <Footer />
    </>
  )
}