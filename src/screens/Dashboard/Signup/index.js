import React, { useState } from 'react';
import './style.scss';
import rankingImg from '../assets/ranking.jpg';

const Signup = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

  const { name, email, password, passwordConfirm } = user;

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="grid-container">
      <div className="image-container">
        <img src={rankingImg} alt="growing plants" />
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
          <div>
            <input
              type="password"
              name="password"
              value={password}
              placeholder="Password"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <input
              type="password"
              name="passwordConfirm"
              value={passwordConfirm}
              placeholder="Confirm Password"
              onChange={handleChange}
              required
            />
          </div>
          <input className="btn btn-dark" type="submit" value="Start Grow!" />
          <label className="signup-text" htmlFor="sign up">
            Already have an account?
          </label>
          <input
            className="btn btn-light"
            type="submit"
            name="sign up"
            value="Sign up"
          />
        </form>
      </div>
    </div>
  );
};

export default Signup;
