import "./../styles/Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import signupImage from "../assets/hero-ticket.jpg";

function Signup() {

    const navigate = useNavigate();

    const [showPopup, setShowPopup] = useState(false);

    const handleSignup = () => {

        setShowPopup(true);

        setTimeout(() => {

            navigate("/dashboard");

        }, 2000);

    };

    return (

        <div className="login-page">

            <div className="login-left">

                <img src={signupImage} alt="signup"/>

                <div className="overlay">

                    <h1>Create Your Account!</h1>

                </div>

            </div>

            <div className="login-right">

                <div className="login-card">

                    <Link to="/" className="back">
                        ← Back
                    </Link>

                    <h2>Sign Up</h2>

                    <p>
                        Create an account to start hosting events.
                    </p>

                    <input
                        type="text"
                        placeholder="Full Name"
                    />

                    <input
                        type="email"
                        placeholder="Email Address"
                    />

                    <input
                        type="password"
                        placeholder="Password"
                    />

                    <input
                        type="password"
                        placeholder="Confirm Password"
                    />

                    <button
                        className="login-btn"
                        onClick={handleSignup}
                    >
                        Create Account
                    </button>

                    <div className="divider">
                        OR
                    </div>

                    <button className="google-btn">
                        Continue with Google
                    </button>

                    <p className="login-link">
                        Already have an account?
                        <Link to="/login">
                            <span> Login</span>
                        </Link>
                    </p>

                </div>
            </div>

            {showPopup && (

                <div className="success-popup">

                    <div className="check-circle">
                        ✔
                    </div>

                    <h2>Account Created!</h2>

                    <p>
                        Welcome to Nexvent. Redirecting to Dashboard...
                    </p>

                </div>

            )}

        </div>

    );

}

export default Signup;