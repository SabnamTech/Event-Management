import "./../styles/Login.css";
import { Link } from "react-router-dom";

import loginImage from "../assets/hero-ticket.jpg";

function Login() {

    return (

        <div className="login-page">

            <div className="login-left">

                <img src={loginImage} alt="login"/>

                <div className="overlay">

                    <h1>Welcome Back!</h1>

                   
                </div>

            </div>


            <div className="login-right">

                <div className="login-card">

                    <Link to="/" className="back">
                        ← Back
                    </Link>

                    <h2>Login</h2>

                    <p>
                        Login to continue
                    </p>

                    <input
                        type="email"
                        placeholder="Email Address"
                    />

                    <input
                        type="password"
                        placeholder="Password"
                    />

                    <div className="options">

                       <label className="remember">

    <input type="checkbox" />

    <span>Remember Me</span>

</label>

                        <a href="/">Forgot Password?</a>

                    </div>

                    <button className="login-btn">

                        Login

                    </button>

                    <div className="divider">

                        OR

                    </div>

                    <button className="google-btn">

                        Continue with Google

                    </button>

                    <p className="signup">

                        Don't have an account?

                        <span>

                            Sign Up

                        </span>

                    </p>

 </div>
 </div>
</div>
 );

}

export default Login;