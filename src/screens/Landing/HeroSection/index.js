import React from "react";
import "./style.scss";
import rightbranch from "./assets/right.png";
import leftbranch from "./assets/left.png";

export default () => (
  <div className='hero-section'>
    <div className='part-1'>
      <h1>Growers Brains</h1>
      <h3>Grow Green. Grow Clean.</h3>
      <p>
        Designed to solve the problems that <br /> growers are globally facing.
        Bringing expert <br /> techniques and solution to everyone
      </p>
      <button>Get Started</button>
    </div>

    <img alt='right-branch' className='right-branch' src={rightbranch} />
    <img alt='left-branch' className='left-branch' src={leftbranch} />

    <div className='part-2'>
      <h2>Fun Ways To Grow Your Plants</h2>
      <p>
        Growing plants can be very expensive and can lead to great losses if not
        done properly. When done effectively, it can be an exciting and relaxing
        process to control the quality of the product.{" "}
      </p>
    </div>
    <div className='green-area'></div>
  </div>
);
