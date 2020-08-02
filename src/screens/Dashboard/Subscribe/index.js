import React from 'react';
import ellipseImg from '../assets/ellipse.png';
import './style.scss';

export default () => (
  <section id="subscribe">
    <div className="content">
      <h2 className="title">Subscribe for Daily Updates</h2>
      <div className='inputContainer'>
        <input id='email' type='text' className="inputEmail" placeHolder="Enter Email" />
        <button id='submit' className="subscribeBtn" >
          Subscribe
        </button>
      </div>
    </div>
    <img className="ellipsis" src={ellipseImg} alt="background" />
  </section>
)
