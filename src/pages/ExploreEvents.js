import Navbar from "../components/Navbar";
import FilterBar from "../components/FilterBar";
import "../styles/ExploreEvents.css";

import EventCard from "../components/EventCard";

import event1 from "../assets/event1.jpg";
import event2 from "../assets/event2.jpg";
import event3 from "../assets/event3.png";
import event4 from "../assets/event4.png";
import event5 from "../assets/event5.png";
import event6 from "../assets/event6.png";

function ExploreEvents() {

    return (

        <>

            <Navbar />

            <div className="explore-container">

                <FilterBar />

                <div className="explore-heading">

                    <h1>
                        Explore All Events.
                    </h1>

                    <p>
                        Filter, search and discover your next experience.
                    </p>

                </div>

               <div className="events-grid">

<EventCard
 image={event1}
 title="Global Green Tech Expo"
 location="Singapore"
 attendees="3.2k Attending"
/>

<EventCard
 image={event2}
 title="Virtual AI Collective Launch"
 location="Delhi"
 attendees="2.8k Attending"
/>

<EventCard
 image={event3}
 title="Quantum Computing Forum"
 location="Bangalore"
 attendees="840 Attending"
/>

<EventCard
 image={event4}
 title="Indie Film Premiere Night"
 location="Mumbai"
 attendees="3.5k Attending"
/>

<EventCard
 image={event5}
 title="International Culinary Tour"
 location="Goa"
 attendees="1.5k Attending"
/>

<EventCard
 image={event6}
 title="Sustainable Cities Workshop"
 location="Guwahati"
 attendees="900 Attending"
/>

<div className="load-more-container">

    <button className="load-more">

        Load More Events

    </button>

</div>

</div>

            </div>

        </>

    );

}

export default ExploreEvents;