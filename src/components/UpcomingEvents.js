import "../styles/Dashboard.css";

function UpcomingEvents(){

    return(

        <div className="upcoming-card">

            <h2>Upcoming Events</h2>

            <div className="upcoming-item">

                <h4>Music Fest</h4>

                <span>25 July</span>

            </div>

            <div className="upcoming-item">

                <h4>Startup Expo</h4>

                <span>30 July</span>

            </div>

            <div className="upcoming-item">

                <h4>Hackathon</h4>

                <span>4 August</span>

            </div>

        </div>

    )

}

export default UpcomingEvents;