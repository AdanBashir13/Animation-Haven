import React, { useState } from "react";
import Navbar from "../components/Navbar";

const LoginForm = () => {

// Tracks whether the form is submitted
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div className="wrapper">

        {/* loading by condition if the form is submitted */}
        {isSubmitted ? (

          // // Displays the thank you message if the form is submitted
          <div className="thank-you-message">
            <h1>Thank You!</h1>
            <p>Your signup was successful. Your pick will be delivered to your address soon. Stay tuned for a wonderful experience and say Hi to the kids for us!</p>
          </div>
        ) : (

          // loads up the signup form if not submitted
          <form onSubmit={handleSubmit}>
            <h1>Signup</h1>

            {/* Form inputs fields */}
            <div className="input-box">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" placeholder="animation-haven" required />
            </div>
            <div className="input-box">
              <label htmlFor="email">E-mail address</label>
              <input type="email" id="email" placeholder="animationhav123@gmail.com" required />
            </div>
            <div className="input-box">
              <label htmlFor="contact">Contact</label>
              <input type="text" id="contact" placeholder="0791........" required />
            </div>
            <div className="input-box">
              <label htmlFor="centre">Centre</label>
              <input type="text" id="centre" placeholder="Rescue DaDa Centre" required />
            </div>
            <div className="input-box">
              <label htmlFor="address">Delivery address</label>
              <input type="text" id="address" placeholder="Kenya, Nairobi, " required />
            </div>
            <div className="input-box">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" placeholder="12@hbKls" required />
            </div>

            {/* Submit button */}
            <button type="submit">Sign up</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default LoginForm;

