import { useState } from "react";

import Navbar from "../components/Navbar";
import Stepper from "../components/Stepper";
import EventForm from "../components/EventForm";
import RightPanel from "../components/RightPanel";

import "../styles/HostEvent.css";

function HostEvent(){

    const [step,setStep] = useState(1);

    const [eventData,setEventData] = useState({

        title:"",
        category:"",
        description:"",
        venue:"",
        date:"",
        startTime:"",
        endTime:"",
        ticketType:"General",
        ticketPrice:"",
        seats:"",
        banner:null

    });

    return(

        <>

            <Navbar/>

            <div className="host-page">

                <div className="heading">

                    <h1>Create Your Next Amazing Event</h1>

                    <p>Fill in the details to get started.</p>

                </div>

                <div className="host-container">

                    <Stepper step={step}/>

                    <EventForm
                        step={step}
                        setStep={setStep}
                        eventData={eventData}
                        setEventData={setEventData}
                    />

                    <RightPanel
                        step={step}
                        eventData={eventData}
                    />

                </div>

            </div>

        </>

    )

}

export default HostEvent;