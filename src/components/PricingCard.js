import "../styles/Pricing.css";

function PricingCard({

    tier,
    price,
    features,
    button,
    color,
    featured

}){

    return(

        <div className={`pricing-card ${featured ? "featured" : ""}`}>

            <div
                className="tier-icon"
                style={{color}}
            >

                🎟

            </div>

            <h3>{tier}</h3>

            <h1>

                {price}

                {price !== "Custom" &&

                    <span>/mo</span>

                }

            </h1>

            <ul>

                {

                    features.map((item,index)=>(

                       <li key={index}>

    <span className="tick">✔</span>

    <span>{item}</span>

</li>

                    ))

                }

            </ul>

            <button
                style={{background:color}}
            >

                {button}

            </button>

        </div>

    )

}

export default PricingCard;