import React from 'react';
import ellipseImg from '../assets/ellipse.png';
import './style.scss';

export default () => (
	<section className='subscribe'>
		<div className='content'>
			<h2 className='title'>Subscribe for Daily Updates</h2>
			<div className='input-container'>
				<input
					id='email'
					type='text'
					className='input-email'
					placeholder='Enter Email'
				/>
				<button id='submit' className='subscribe-btn'>
					Subscribe
				</button>
			</div>
		</div>
		<img className='ellipsis' src={ellipseImg} alt='background' />
	</section>
);
