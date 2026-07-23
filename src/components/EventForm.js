
import "../styles/EventForm.css";

function EventForm({

    step,
    setStep,
    eventData,
    setEventData

}) {

 

    
    const handleChange = (e) => {

        const { name, value } = e.target;

        setEventData({
            ...eventData,
            [name]: value
        });

    };

    // Handle banner upload
    const handleBanner = (e) => {

        const file = e.target.files[0];

        if (file) {

            const image = URL.createObjectURL(file);

            setEventData({
                ...eventData,
                banner: image
            });

        }

    };

    return (

        <div className="event-form">

            <div className="step-title">

                <h2>

                    {step === 1 && "Core Information"}
                    {step === 2 && "Venue & Date"}
                    {step === 3 && "Ticket Details"}
                    {step === 4 && "Review & Publish"}

                </h2>

            </div>

            {/* STEP 1 */}

            {step === 1 && (

                <>

                    <div className="form-group">

                        <label>Event Title</label>

                        <input
                            type="text"
                            name="title"
                            value={eventData.title}
                            onChange={handleChange}
                            placeholder="e.g. Global Green Tech Expo"
                        />

                    </div>

                    <div className="form-group">

                        <label>Event Category</label>

                        <select
                            name="category"
                            value={eventData.category}
                            onChange={handleChange}
                        >

                            <option value="">Select Category</option>
                            <option>Technology</option>
                            <option>Business</option>
                            <option>Music</option>
                            <option>Workshop</option>
                            <option>Sports</option>

                        </select>

                    </div>

                    <div className="form-group">

                        <label>Event Description</label>

                        <textarea
                            rows="6"
                            maxLength="200"
                            name="description"
                            value={eventData.description}
                            onChange={handleChange}
                            placeholder="Describe your event..."
                        ></textarea>

                        <small
                            className={
                                eventData.description.length === 200
                                    ? "limit-reached"
                                    : eventData.description.length >= 150
                                    ? "warning"
                                    : ""
                            }
                        >
                            {eventData.description.length} / 200
                        </small>

                    </div>

                    <div className="form-group">

                        <label>Event Banner</label>

                        <div className="upload-box">

                            {eventData.banner ? (

                                <img
                                    src={eventData.banner}
                                    alt="Banner"
                                    className="banner-preview"
                                />

                            ) : (

                                <>

                                    <div className="upload-icon">

                                        📁

                                    </div>

                                    <p>Click or Drag Image Here</p>

                                </>

                            )}

                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleBanner}
                            />

                        </div>

                    </div>

                </>

            )}

            {/* STEP 2 */}

            {step === 2 && (

                <>

                    <div className="form-group">

                        <label>Venue Name</label>

                        <input
                            type="text"
                            name="venue"
                            value={eventData.venue}
                            onChange={handleChange}
                            placeholder="Enter Venue Name"
                        />

                    </div>

                    <div className="form-group">

                        <label>Event Date</label>

                        <input
                            type="date"
                            name="date"
                            value={eventData.date}
                            onChange={handleChange}
                        />

                    </div>

                    <div className="form-group">

                        <label>Start Time</label>

                        <input
                            type="time"
                            name="startTime"
                            value={eventData.startTime}
                            onChange={handleChange}
                        />

                    </div>

                    <div className="form-group">

                        <label>End Time</label>

                        <input
                            type="time"
                            name="endTime"
                            value={eventData.endTime}
                            onChange={handleChange}
                        />

                    </div>

                </>

            )}

            {/* STEP 3 */}

            {step === 3 && (

                <>

                    <div className="form-group">

                        <label>Ticket Type</label>

                        <select
                            name="ticketType"
                            value={eventData.ticketType}
                            onChange={handleChange}
                        >

                            <option>General</option>
                            <option>VIP</option>
                            <option>Student</option>

                        </select>

                    </div>

                    <div className="form-group">

                        <label>Ticket Price</label>

                        <input
                            type="number"
                            name="ticketPrice"
                            value={eventData.ticketPrice}
                            onChange={handleChange}
                            placeholder="₹ 500"
                        />

                    </div>

                    <div className="form-group">

                        <label>Total Seats</label>

                        <input
                            type="number"
                            name="seats"
                            value={eventData.seats}
                            onChange={handleChange}
                            placeholder="500"
                        />

                    </div>

                </>

            )}

            {/* STEP 4 */}

            {step === 4 && (

                <div className="review-box">

                    <h3>Review Your Event</h3>

                    <p><strong>Title:</strong> {eventData.title || "-"}</p>

                    <p><strong>Category:</strong> {eventData.category || "-"}</p>

                    <p><strong>Venue:</strong> {eventData.venue || "-"}</p>

                    <p><strong>Date:</strong> {eventData.date || "-"}</p>

                    <p><strong>Ticket:</strong> {eventData.ticketType}</p>

                    <p><strong>Price:</strong> ₹ {eventData.ticketPrice || "0"}</p>

                    <p><strong>Seats:</strong> {eventData.seats || "0"}</p>

                </div>

            )}

            {/* Buttons */}

            <div className="button-group">

                <button
                    className="cancel-btn"
                    onClick={() => step > 1 && setStep(step - 1)}
                >
                    Previous
                </button>

                <button
                    className="draft-btn"
                    type="button"
                >
                    Save Draft
                </button>

                <button
                    className="next-btn"
                    type="button"
                    onClick={() => {

                        if (step < 4) {

                            setStep(step + 1);

                        } else {

                            alert("🎉 Event Published Successfully!");

                        }

                    }}
                >
                    {step === 4 ? "Publish Event" : "Next"}
                </button>

            </div>

        </div>

    );

}

export default EventForm;