import ContatoSub from '../../components/ContatoSub/ContatoSub';
import Footer from '../../components/Footer/Footer';
import FormWhatsApp from '../../components/FormWhatsApp/FormWhatsApp';
import Header from '../../components/Header/Header';
import TitleSubPages from '../../components/TitleSubPages/TitleSubPages';

export default function ContatoPage() {
  return (
    <>
      <Header />
      <TitleSubPages 
        title='Contato'
        subtitle='Estamos preparados para te atender'
      />
      <FormWhatsApp />
      <ContatoSub />
      <Footer />
    </>
  )
}