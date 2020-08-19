import React, { useState } from "react";
import "./style.scss";
import plantImg from "./assets/growing.jpg";

const Signup = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    showPassword: false,
    showConfirmPassword: false,
  });

  const {
    name,
    email,
    password,
    confirmPassword,
    showPassword,
    showConfirmPassword,
  } = user;

	const handleChange = (e) => {
		setUser({ ...user, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
    e.preventDefault();
//     console.log(user)
	};

  const togglePasswordVisibility = () => {
    setUser({ ...user, showPassword: !showPassword });
  };

  const togglePasswordConfirmVisibility = () => {
    setUser({ ...user, showConfirmPassword: !showConfirmPassword });
  };

  const passwordToggleEye = {
    toShowPassword: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="gray"
        width="18px"
        height="18px"
        className="password-toggle"
        onClick={togglePasswordVisibility}
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
      </svg>
    ),
    toHidePassword: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="gray"
        width="18px"
        height="18px"
        className="password-toggle"
        onClick={togglePasswordVisibility}
      >
        <path
          d="M0 0h24v24H0zm0 0h24v24H0zm0 0h24v24H0zm0 0h24v24H0z"
          fill="none"
        />
        <path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z" />
      </svg>
    ),
    toShowConfirmPassword: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="gray"
        width="18px"
        height="18px"
        className="password-toggle"
        onClick={togglePasswordConfirmVisibility}
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
      </svg>
    ),
    toHideConfirmPassword: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="gray"
        width="18px"
        height="18px"
        className="password-toggle"
        onClick={togglePasswordConfirmVisibility}
      >
        <path
          d="M0 0h24v24H0zm0 0h24v24H0zm0 0h24v24H0zm0 0h24v24H0z"
          fill="none"
        />
        <path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z" />
      </svg>
    ),
  };

  return (
    <div className="grid-container">
      <div className="image-container">
        <img src={plantImg} alt="growing plants" />
      </div>
      <div className="form-container">
        <form className="form-group" onSubmit={handleSubmit}>
          <h1 className="title">Sign Up</h1>
          <div>
            <input
              type="text"
              name="name"
              value={name}
              placeholder="Display Name"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              value={email}
              placeholder="Email"
              onChange={handleChange}
              required
            />
          </div>
          <div className="password-container">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={password}
              placeholder="Password"
              onChange={handleChange}
              required
            />
            {showPassword
              ? passwordToggleEye.toHidePassword
              : passwordToggleEye.toShowPassword}
          </div>
          <div className="password-container">
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              value={confirmPassword}
              placeholder="Confirm Password"
              onChange={handleChange}
              required
            />
            {showConfirmPassword
              ? passwordToggleEye.toHideConfirmPassword
              : passwordToggleEye.toShowConfirmPassword}
          </div>
          <input className="btn btn-dark" type="submit" value="Start Grow!" />
          <label className="signup-text" htmlFor="sign in">
            Already have an account?
          </label>
          <input
            className="btn btn-light"
            type="submit"
            name="sign in"
            value="Sign In"
          />
        </form>
      </div>
    </div>
  );
};

export default Signup;
