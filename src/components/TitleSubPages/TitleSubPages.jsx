import './TitleSubPages.css';

export default function TitleSubPages({title, subtitle}) {
  return (
    <div className="title-sub-pages">
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </div>
  )
}