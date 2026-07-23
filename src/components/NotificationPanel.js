import "../styles/Dashboard.css";

import {
    IoNotifications,
    IoTicket
} from "react-icons/io5";

import {
    FaStar
} from "react-icons/fa";

import {
    MdEventAvailable
} from "react-icons/md";

function NotificationPanel(){

    return(

        <div className="notification-card">

            <h2>Notifications</h2>

            <ul>

                <li>

<IoNotifications className="notify-icon"/>

AI Summit reached 400 registrations

</li>

                <li>

<IoTicket className="notify-icon"/>

25 new tickets sold today

</li>

                <li>

<MdEventAvailable className="notify-icon"/>

Workshop starts tomorrow

</li>

                <li>

<FaStar className="notify-icon"/>

New review received

</li>

            </ul>

        </div>

    )

}

export default NotificationPanel;