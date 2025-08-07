// Card.jsx
function Card({ cardData }) {
  // Destructure with defaults
  const { title, text = "further info coming soon" } = cardData;

  return (
    <div className="card mx-2">
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}

export default Card;