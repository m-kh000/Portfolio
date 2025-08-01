// Card.jsx
function Card({ cardData }) {
  // Destructure with defaults
  const { imgSrc, title, text = "further info coming soon" } = cardData;

  return (
    <div className="card">
      <img src={imgSrc} alt={title} className="icon" />
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}

export default Card;