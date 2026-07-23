import Navbar from "../components/Navbar";
import StatCard from "../components/StatCard";
import EventCard from "../components/EventCard";
import RegistrationCard from "../components/RegistrationCard";
import RevenueChart from "../components/RevenueChart";
import NotificationPanel from "../components/NotificationPanel";
import UpcomingEvents from "../components/UpcomingEvents";
import QuickActions from "../components/QuickActions";

import "../styles/Dashboard.css";

import {
    FaCalendarAlt,
    FaTicketAlt,
    FaRupeeSign,
    FaClock
} from "react-icons/fa";

function Dashboard(){

    return(

        <>

        <Navbar/>

        <div className="dashboard">

            <div className="dashboard-header">

                <h1>

                    Welcome Back 👋

                </h1>

                <p>

                    Manage your events from one place.

                </p>

            </div>

           <div className="stats">

    <StatCard
        title="Total Events"
        value="12"
        icon={<FaCalendarAlt />}
    />

    <StatCard
        title="Tickets Sold"
        value="845"
        icon={<FaTicketAlt />}
    />

    <StatCard
        title="Revenue"
        value="₹85K"
       icon={<FaRupeeSign />}
    />

    <StatCard
        title="Upcoming"
        value="4"
        icon={<FaClock />}
    />

</div>

            <div className="dashboard-top">

    <RevenueChart/>

    <NotificationPanel/>

</div>

            <div className="dashboard-grid">

                <div className="left">

                    <h2>

                        Recent Events

                    </h2>

                    <EventCard/>

                    <EventCard/>

                    <EventCard/>

                </div>

                <div className="dashboard-bottom">

    <UpcomingEvents/>

    <QuickActions/>

</div>

                <div className="right">

                    <h2>

                        Recent Registrations

                    </h2>

                    <RegistrationCard/>

                    <RegistrationCard/>

                    <RegistrationCard/>

                </div>

            </div>

        </div>

        </>

    )

}

export default Dashboard;