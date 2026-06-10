import { useState } from 'react';
import './FormWhatsApp.css';
import celularImg from '../../assets/images/celularImg.png';

export default function FormWhatsApp() {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');

  async function enviarForm(e) {
    e.preventDefault();

    const formData = new FormData();

    formData.append('nome', nome);
    formData.append('telefone', telefone);

    const telefoneLimpo = telefone.replace(/\D/g, '');

    if (
      telefoneLimpo.length < 10 ||
      telefoneLimpo.length > 11
    ) {
      alert('Digite um telefone válido.');
      return;
    }

    try {
      await fetch(
        'https://script.google.com/macros/s/AKfycby4eqdTYPDkZtIQEUDuRsAnmY1psL-7wwEtaCV_usTIprS8KZB8pnB0xnMiWyktN1uVrA/exec',
        {
          method: 'POST',
          body: formData
        }
      );
      alert('Enviado com sucesso!');

      setNome('');
      setTelefone('');
    } catch (err) {
      console.log(err);
      
    }
  }

  function formatarTelefone(valor) {
    valor = valor.replace(/\D/g, '');

    valor =  valor.slice(0, 11);

    if (valor.length <= 2) {
      return valor;
    }

    if (valor.length <= 7) {
      return valor.replace(
        /^(\d{2})(\d+)/,
        '($1) $2'
      );
    }

    return valor.replace(
      /^(\d{2})(\d{5})(\d+)/,
      '($1) $2-$3'
    )
  }

  return (
    <section className="form-whatsapp-container">
      <div className="form-whats-destaque">
        <i className="fa-brands fa-whatsapp"></i>
        <p>OFERTAS NO WHATSAPP</p>
      </div>
      <div className="form-whats-top-container">
        <div className="form-text-container">
          <h2 className="form-title">
            Receba nossas <span>promoções!</span>
          </h2>
          <p className="form-desc">
            Entre na nossa lista de transmissão e receba ofertas exclusicas, cupons e novidades em primeira mão.
          </p>
        </div>
        <div className="form-img-container">
          <img src={celularImg} alt="Imagem de um celular" />
        </div>
        <div className="form-list-destaques">
          <div className="form-item-destaque">
            <div className="item-destaque-icon">
              <i className="fa-solid fa-percent"></i>
            </div>
            <div className="item-destaque-text">
              <p className='item-destaque-text-title'>Promoções Exclusivas</p>
              <p className="item-destaque-only-desktop">
                Ofertas especiais só para você
              </p>
            </div>
          </div>
          <div className="form-item-destaque">
            <div className="item-destaque-icon">
             <i className="fa-solid fa-tags"></i>
            </div>
            <div className="item-destaque-text">
              <p className='item-destaque-text-title'>Cupons de Desconto</p>
              <p className="item-destaque-only-desktop">
                Descontos imperdiveis todas as semanas
              </p>
            </div>
          </div>
          <div className="form-item-destaque">
            <div className="item-destaque-icon">
              <i className="fa-solid fa-bullhorn"></i>
            </div>
            <div className="item-destaque-text">
              <p className='item-destaque-text-title'>Novidades</p>
              <p className="item-destaque-only-desktop">
                Novidades em primeira mão
              </p>
            </div>            
          </div>
          <div className="form-item-destaque">
            <div className="item-destaque-icon">
              <i className="fa-solid fa-shield-heart"></i>
            </div>
            <div className="item-destaque-text">
              <p className='item-destaque-text-title'>Confiança</p>
              <p className="item-destaque-only-desktop">
                Conteúdo seguro e sem spam
              </p>
            </div>             
          </div>
        </div>
      </div>
      <form onSubmit={enviarForm} className="form-whatsapp">
          <div className="form-title-container">
            <i className="fa-brands fa-whatsapp"></i>
            <div className="form-title-bottom">
              <h2>Quero receber <span>promoções</span></h2>
              <p>Preencha seus dados para participar</p>
            </div>
          </div>
          <div className="form-inputs-container">
            <div className="form-item-container">
              <i className="fa-regular fa-user"></i>
              <input 
                type="text"
                placeholder='Seu nome completo'
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </div>
            <div className="form-item-container">
              <i className="fa-solid fa-phone"></i>
              <input 
                type="tel"
                placeholder='(37) 9 9999-9999'
                value={telefone}
                onChange={(e) => setTelefone(formatarTelefone(e.target.value))}
              />
            </div>
          </div>
          <div className="form-checkbox">
            <input type="checkbox" name="termos" id="termos" required/>
            <div className="text-checkbox">
              <label htmlFor='termos'>
                Concordo em receber ofertas e promoções da empresa pelo WhatsApp.
              </label>
              <br />
              <label htmlFor='termos'>
                Meus dados serão usados apenas para esse fim e posso cancelar o recebimento a qualquer momento.
              </label>
            </div>
          </div>
          <button type='submit' className='form-btn'>
            <i className="fa-brands fa-whatsapp"></i>
            <p>RECEBER PROMOÇÕES</p>
          </button>
          <div className="form-message">
            <i className="fa-solid fa-lock"></i>
            <p>Seus dados estão seguros. Não compartilhamos suas informações.</p>
          </div>
        </form>
    </section>
  )
}