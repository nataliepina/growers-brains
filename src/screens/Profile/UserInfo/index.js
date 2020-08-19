import React from 'react'
import './styles.scss'

const UserInfo = () => {
    return (
        <>
            <div className="row basic-info">    
                <div className="userpage">
                    User Page
                </div>
                <div className="user-name">
                    Debra Kerington
                </div>
                <div className="user-addr">
                    St. Martin Parish, Louisana, US
                </div>
            </div>
            <div className="row info-bottom">
                <div className="tags">
                    <div className="tags-header">Explore</div>
                    <div className="tag-list">
                        <div className="tag">Biology</div>
                        <div className="tag">Indoor</div>
                        <div className="tag">water plants</div>
                    </div>
                </div>

                <div className="socials">
                    <div className="social-header">Social</div>
                    <div className="social-list">
                        <a href="http://facebook.com">
                            <i className='fab fa-facebook'></i>
                        </a>

                        <a href="http://linkedin.com">
                            <i className='fab fa-linkedin'></i>
                        </a>

                        <a href="http://twitter.com">
                            <i className='fab fa-twitter'></i>
                        </a>

                        <a href="http://youtube.com">
                            <i className='fab fa-youtube'></i>
                        </a>

                        <a href="http://instagram.com">
                            <i className='fab fa-instagram'></i>
                        </a>

                    </div>
                </div>

                <div className="biography">
                    <div className="bio-header">Biography</div>
                    <div className="bio-text">
                        How to Write a Biographical Sketch. Writing a biographical sketch can help you learn about a figure's importance and see the world through their eyes. Since you can't cover a person's entire life in a sketch, try to focus on their biggest...
                    </div>
                </div>

            </div>
        </>
    );
}

export default UserInfo;