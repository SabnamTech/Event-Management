import "../styles/Dashboard.css";

function EventCard() {

    return (

        <div className="event-card">

            <div className="event-left">

                <h3>AI Summit 2026</h3>

                <p>Technology Conference</p>

            </div>

            <div className="event-right">

                <span className="status">Published</span>

                <p>20 July 2026</p>

                <div className="event-buttons">

                    <button className="view-btn">

                        View

                    </button>

                    <button className="edit-btn">

                        Edit

                    </button>

                </div>

            </div>

        </div>

    );

}

export default EventRow;