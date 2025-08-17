// Card.jsx
function Card({ cardData }) {
  // Destructure with defaults
  const { title, text ,link = "further info coming soon" } = cardData;

  return (
    <div className="card mx-2" >
      <a href={link} >
      <h2>{title}</h2>
      <div className="w-full place-items-center">
      <p>{text}</p>
      </div>
      </a>
    </div>
  );
}

export default Card;