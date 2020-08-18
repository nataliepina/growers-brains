import React from 'react';
import './style.scss';
import rightbranch from './assets/right.png';
import leftbranch from './assets/left.png';

export default () => (
	<div className='hero-section'>
		<div className='hero-wrapper'>
			<h1 className='title'>Growers Brains</h1>
			<h3 className='sub-title'>Grow Green. Grow Clean.</h3>
			<p className='info'>
				Designed to solve the problems that <br /> growers are globally facing.
				Bringing expert <br /> techniques and solution to everyone
			</p>
			<button>Get Started</button>
		</div>

		<img alt='right-branch' className='right-branch' src={rightbranch} />
		<img alt='left-branch' className='left-branch' src={leftbranch} />

		<div className='info-section'>
			<h2 className='title'>Fun Ways To Grow Your Plants</h2>
			<p className='info'>
				Growing plants can be very expensive and can lead to great losses if not
				done properly. When done effectively, it can be an exciting and relaxing
				process to control the quality of the product.
			</p>
		</div>
		<div className='green-area'></div>
	</div>
);
