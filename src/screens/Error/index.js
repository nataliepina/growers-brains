import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const Error = () => (
  <div className="error-screen-div">
    <h1 className="big-text">404</h1>
    <h2 className="small-text">Page not found</h2>
    <button className="home-btn">
      <Link className="home-link" to="/">
        Go to Homepage
      </Link>
    </button>
  </div>
);

export default Error;
