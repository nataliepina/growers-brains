import React from 'react';
import './style.scss';

export default () => (
	<footer className='footer'>
		<div className='container'>
			<div className='top'>
				<p className='contact-text'>Contact</p>
				<div className='contact-info'>
					<p className='phone'>+1-234-567-8900</p>
					<p className='email'>info@growersbrains.com</p>
				</div>
				<p className='title'>Growers Brains</p>
				<button className='contact'>Contact Us</button>
			</div>
			<div className='h-line' />
			<div className='bottom'>
				<div className='bottom-left'>
					<ul className='footer-list'>
						<li>
							<button href='#'>Help</button>
						</li>
						<li>
							<button href='#'>Terms</button>
						</li>
						<li>
							<button href='#'>Privacy Policy</button>
						</li>
					</ul>
					<p className='copyright'>
						<span dangerouslySetInnerHTML={{ __html: '&copy;' }} />
						2020 Growers Brains
					</p>
				</div>
				<div className='social-icons'>
					<ul className='social-list__items'>
						<li className='social-list__item'>
							<a
								href='http://facebook.com'
								aria-hidden='true'
								className='social-list__link'
								rel='noopener'
								alt='go to Instagram'
							>
								<span className='sr-only'>Opens new window</span>
								<i className='fab fa-facebook fa-2x'></i>
							</a>
						</li>
						<li className='social-list__item'>
							<a
								href='http://linkedin.com'
								aria-hidden='true'
								className='social-list__link'
								rel='noopener'
								alt='go to LinkedIn'
							>
								<span className='sr-only'>Opens new window</span>
								<i className='fab fa-linkedin fa-2x'></i>
							</a>
						</li>
						<li className='social-list__item'>
							<a
								href='http://twitter.com'
								aria-hidden='true'
								className='social-list__link'
								rel='noopener'
								alt='go to Twitter'
							>
								<span className='sr-only'>Opens new window</span>
								<i className='fab fa-twitter fa-2x'></i>
							</a>
						</li>
						<li className='social-list__item'>
							<a
								href='http://youtube.com'
								aria-hidden='true'
								className='social-list__link'
								rel='noopener'
								alt='go to Youtube'
							>
								<span className='sr-only'>Opens new window</span>
								<i className='fab fa-youtube fa-2x'></i>
							</a>
						</li>
						<li className='social-list__item'>
							<a
								href='http://instagram.com'
								aria-hidden='true'
								className='social-list__link'
								rel='noopener'
								alt='go to Instagram'
							>
								<span className='sr-only'>Opens new window</span>
								<i className='fab fa-instagram fa-2x'></i>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</footer>
);
