import "../styles/Stepper.css";

function Stepper({step}){

return(

<div className="stepper">

<div className={step===1 ? "step active":"step"}>

<div className="circle">

1

</div>

<span>

Core Info

</span>

</div>

<div className="line"></div>

<div className={step===2 ? "step active":"step"}>

<div className="circle">

2

</div>

<span>

Venue & Date

</span>

</div>

<div className="line"></div>

<div className={step===3 ? "step active":"step"}>

<div className="circle">

3

</div>

<span>

Ticketing

</span>

</div>

<div className="line"></div>

<div className={step===4 ? "step active":"step"}>

<div className="circle">

4

</div>

<span>

Publish

</span>

</div>

</div>

)

}

export default Stepper;