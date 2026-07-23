import "../styles/RightPanel.css";

function RightPanel({ step, eventData }) {

    return (

        <div className="right-panel">

           

            <div className="panel-card preview-card">

                <h3>Live Event Preview</h3>

                <div className="preview-image">

                    {eventData.banner ? (

                        <img
                            src={eventData.banner}
                            alt="Banner"
                        />

                    ) : (

                        <div className="placeholder">

                            Upload Banner

                        </div>

                    )}

                </div>

                <div className="preview-content">

                    <h2>

                        {eventData.title || "Your Event Title"}

                    </h2>

                    <p>

                        🏷 {eventData.category || "Category"}

                    </p>

                    <p>

                        📍 {eventData.venue || "Venue"}

                    </p>

                    <p>

                        📅 {eventData.date || "Event Date"}

                    </p>

                    <p>

                        🎟 {eventData.ticketType}

                    </p>

                    <p>

                        💰 ₹ {eventData.ticketPrice || "0"}

                    </p>

                </div>

            </div>

            {/* Calendar */}

            <div className="panel-card calendar-card">

                <h3>📅 Calendar</h3>

                <div className="calendar-header">

                    <button>{"<"}</button>

                    <span>July 2026</span>

                    <button>{">"}</button>

                </div>

                <div className="calendar-grid">

                    <span>Su</span>
                    <span>Mo</span>
                    <span>Tu</span>
                    <span>We</span>
                    <span>Th</span>
                    <span>Fr</span>
                    <span>Sa</span>

                    <span></span>
                    <span></span>

                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                    <span>5</span>

                    <span>6</span>
                    <span>7</span>
                    <span>8</span>
                    <span>9</span>
                    <span>10</span>
                    <span>11</span>
                    <span>12</span>

                    <span>13</span>
                    <span>14</span>
                    <span>15</span>
                    <span>16</span>
                    <span>17</span>
                    <span>18</span>
                    <span>19</span>

                    <span>20</span>
                    <span>21</span>
                    <span className="active-day">22</span>
                    <span>23</span>
                    <span>24</span>
                    <span>25</span>
                    <span>26</span>

                    <span>27</span>
                    <span>28</span>
                    <span>29</span>
                    <span>30</span>
                    <span>31</span>

                </div>

            </div>

        </div>

    );

}

export default RightPanel;