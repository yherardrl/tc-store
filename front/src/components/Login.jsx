import React from "react";
export default ({
  handleButton,
  handleChange,
  handleSignUp,
  handleSingIn,
  handleSignGoogle,
  inputs,
}) => (
  <div className="cont">
    <div className="form sign-in">
      <h2>Sign In</h2>
      <label>
        <span>Email Address</span>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={inputs.email}
        />
      </label>
      <label>
        <span>Password</span>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={inputs.password}
        />
      </label>
      <button className="submit" type="button" onClick={handleSingIn}>
        Sign In
      </button>
      <div className="social-media">
        <ul>
          <li>
            <img src="images/facebook.png" />
          </li>
          <li>
            <span onClick={handleSignGoogle}>
              <img src="images/google.png" />
            </span>
          </li>
        </ul>
      </div>
    </div>

    <div className="sub-cont">
      <div className="img">
        <div className="img-text m-up">
          <h2>New here?</h2>
          <p>Sign up and discover great amount of new opportunities!</p>
        </div>
        <div className="img-text m-in">
          <h2>One of us?</h2>
          <p>If you already have an account, just sign in. We've missed you!</p>
        </div>

        <div className="img-btn" onClick={handleButton}>
          <span className="m-up">Sign Up</span>
          <span className="m-in">Sign In</span>
        </div>
      </div>
      <div className="form sign-up">
        <h2>Sign Up</h2>
        <label>
          <span>Name</span>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={inputs.name}
          />
        </label>
        <label>
          <span>Email</span>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={inputs.email}
          />
        </label>
        <label>
          <span>Password</span>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={inputs.password}
          />
        </label>
        <label>
          <span>Confirm Password</span>
          <input
            type="password"
            name="confirmPassword"
            onChange={handleChange}
            value={inputs.confirmPassword}
          />
        </label>
        <button type="button" className="submit" onClick={handleSignUp}>
          Sign Up Now
        </button>
      </div>
    </div>
  </div>
);
