import React from "react";

const LoginForm = () => {
  return (
    <div className="wrapper">
      <form action="">
        <h1>Login</h1>
        {/* Username field */}
        <div className="input-box">
          <input type="text" placeholder="Username" required />
        </div>
        {/* Email address field */}
        <div className="input-box">
          <input type="text" placeholder="email address" required />
        </div>
        {/* Contact field */}
        <div className="input-box">
          <input type="text" placeholder="contact" required />
        </div>
        {/* Center field */}
        <div className="input-box">
          <input type="text" placeholder="Center" required />
        </div>
        {/* Password field */}
        <div className="input-box">
          <input type="password" placeholder="password" required />
        </div>
        {/* Submit button */}
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};

export default LoginForm;