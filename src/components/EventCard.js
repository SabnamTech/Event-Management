import "../styles/EventCard.css";

function EventCard({ image, title, date, venue }) {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />

      <div className="card-content">
        <h3>{title}</h3>
        <p>{date}</p>
        <p>{venue}</p>
      </div>
    </div>
  );
}

export default EventCard;