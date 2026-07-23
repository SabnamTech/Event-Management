import "../styles/Dashboard.css";
import { FaUser } from "react-icons/fa";

function RegistrationCard() {

    return (

        <div className="registration-card">

            <div className="user-avatar">

                <FaUser/>

            </div>

            <div>

                <h4>Rahul Sharma</h4>

                <p>Registered for AI Summit 2026</p>

            </div>

            <span className="time">

                2 mins ago

            </span>

        </div>

    );

}

export default RegistrationCard;