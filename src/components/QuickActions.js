import "../styles/Dashboard.css";

import {
    FaPlus,
    FaFileDownload,
    FaTicketAlt
} from "react-icons/fa";

function QuickActions(){

    return(

        <div className="quick-actions">

            <h2>Quick Actions</h2>

            <button>

<FaPlus/>

Create Event

</button>

            <button>

<FaFileDownload/>

Download Report

</button>

           <button>

<FaTicketAlt/>

Manage Tickets

</button>

        </div>

    )

}

export default QuickActions;