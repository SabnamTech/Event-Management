import "../styles/Hero.css";
import heroTicket from "../assets/hero-ticket.jpg";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1>
          Don’t just host. Create unforgettable experiences.
        </h1>

        <p>
          The complete platform for planning, ticketing and elevating your events.
        </p>
      </div>

      <div className="hero-right">
        <img src={heroTicket} alt="ticket" className="hero-ticket" />
      </div>
    </section>
  );
}

export default Hero;