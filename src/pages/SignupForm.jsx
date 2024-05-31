import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const LoginForm = () => {
  return (
    <div>
        <div>
          <Navbar />
        </div>

        <div className="wrapper">
        <form action="">
            <h1>Signup</h1>
            {/* Username*/}
            <div className="input-box">
            <input type="text" placeholder="Username" required />
            </div>
            {/* Email address */}
            <div className="input-box">
            <input type="text" placeholder="E-mail address" required />
            </div>
            {/* Contact */}
            <div className="input-box">
            <input type="text" placeholder="Contact" required />
            </div>
            {/* Centre */}
            <div className="input-box">
            <input type="text" placeholder="Centre" required />
            </div>
            {/* Delivery address */}
            <div className="input-box">
            <input type="text" placeholder="Delivery address" required />
            </div>
            {/* Password */}
            <div className="input-box">
            <input type="password" placeholder="Password" required />
            </div>
            <button type="submit">Sign up</button>
        </form>
        </div>
    </div>
  );
};

export default LoginForm;