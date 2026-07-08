import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import EventCard from "../components/EventCard";
import "../styles/Home.css";

import event1 from "../assets/event1.jpg";
import event2 from "../assets/event2.jpg";
import event3 from "../assets/event3.png";

function Home() {
  return (
    <div className="home">
      <Navbar />
      <Hero />
      <SearchBar />

      <section className="events-section">
        <h2>LIVE PULSE: Happening Now</h2>

        <div className="cards">
          <EventCard
            image={event1}
            title="AI Innovate Summit 2024"
            date="Dec 18, 2024"
            venue="Singapore"
          />
          <EventCard
            image={event2}
            title="Urban Beats Festival"
            date="Dec 18, 2024"
            venue="Beats Arena"
          />
          <EventCard
          image={event3}
            title="Design Mastery Workshop"
            date="Dec 18, 2024"
            venue="Creative Hub"
          />
        </div>
      </section>
    </div>
  );
}

export default Home;