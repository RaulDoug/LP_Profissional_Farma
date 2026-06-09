import './WhatsAppButton.css';

export default function WhatsAppButton({width, height, iconSize, textsize, className}) {
  return (
    <a 
      href='https://wa.me/5537998231077'
      className={`whats-btn ${className || ''}`}
      target="_blank"
      style={{
        width,
        height
      }}
    >
      <i className="fa-brands fa-whatsapp" style={{fontSize: iconSize}}></i>
      <p style={{fontSize: textsize}}>Pedir no WhatsApp</p>
    </a>
  )
}