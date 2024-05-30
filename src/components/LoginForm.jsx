import React from "react";

const LoginForm = () => {
  return (
    <div className="wrapper">
      <form action="">
        <h1>Login</h1>
        {/* Username*/}
        <div className="input-box">
          <input type="text" placeholder="Username" required />
        </div>
        {/* Email address */}
        <div className="input-box">
          <input type="text" placeholder="email address" required />
        </div>
        {/* Contact */}
        <div className="input-box">
          <input type="text" placeholder="contact" required />
        </div>
        {/* Center */}
        <div className="input-box">
          <input type="text" placeholder="Center" required />
        </div>
        {/* Password */}
        <div className="input-box">
          <input type="password" placeholder="password" required />
        </div>
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};

export default LoginForm;