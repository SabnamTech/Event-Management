import Navbar from "../components/Navbar";
import PricingCard from "../components/PricingCard";
import "../styles/Pricing.css";

function Pricing() {

    return (

        <>
            <Navbar />

            <div className="pricing-page">

                <h1>
                    Pricing built for creators and
                    <br />
                    organizations to scale.
                </h1>

                <div className="billing-toggle">

                    <span>Monthly</span>

                    <label className="switch">

                        <input type="checkbox" />

                        <span className="slider"></span>

                    </label>

                    <span>Yearly</span>

                </div>

                <div className="pricing-container">

                    <PricingCard
                        tier="Tier 1 : Starter"
                        price="$0"
                        color="#8b5cf6"
                        button="Get Started"
                        features={[
                            "Host 2 Free Events/month",
                            "Basic Analytics",
                            "Standard Support"
                        ]}
                    />

                    <PricingCard
                        featured={true}
                        tier="Tier 2 : Professional"
                        price="$99"
                        color="#9b5cff"
                        button="Select Pro"
                        features={[
                            "Host 10 Events/month",
                            "Advanced AI Analytics",
                            "Custom Check-in App",
                            "API Access",
                            "Priority Support"
                        ]}
                    />

                    <PricingCard
                        tier="Tier 3 : Enterprise"
                        price="Custom"
                        color="#ff4f7b"
                        button="Contact Sales"
                        features={[
                            "Unlimited Events",
                            "White Label Platform",
                            "Dedicated Manager",
                            "Volume Discounts"
                        ]}
                    />

                </div>

                <p className="hardware-text">

                    Looking for on-site hardware? We have that too.

                </p>

            </div>

        </>

    )

}

export default Pricing;