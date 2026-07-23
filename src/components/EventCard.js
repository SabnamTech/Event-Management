import "../styles/EventCard.css";

function EventCard({ image, title, location, attendees }) {
  return (
    <div className="event-card">

      <img src={image} alt={title} className="event-image" />

      <div className="event-content">

        <span className="category">
          Technology
        </span>

        <h3>{title}</h3>

        <p>📅 Dec 18, 2024 • 10:00</p>

        <p>📍 {location}</p>

        <div className="card-footer">

          <span>👥 {attendees}</span>

          <button>
            View Details
          </button>

        </div>

      </div>

    </div>
  );
}

export default EventCard;