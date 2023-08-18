import React, {useState, useEffect, useRef} from 'react';

import './FollowUs.css';

import iconPhone from '../../../images/call.svg';
import iconStreet from '../../../images/pin_drop.svg';
import iconFacebook from '../../../images/Facebook.svg';
import iconInstagram from '../../../images/Instagram.svg';
import iconPinterest from '../../../images/Pinterest.svg';
import iconTelegram from '../../../images/Telegram.svg';
import iconTwitter from '../../../images/Twitter.svg';
import bigImage from '../../../images/RightColum.png'

export function FollowUS(){

    return (
        <div className='follow-us-section'>
            <div className='lets-talk-div'>
                <form action="" method="post">
                    <h1>Lets Talk</h1>
                    <p>We will call you back</p>
                    <div>
                    <input type="tel" name="" id="" placeholder='+380 XX XXX XX XX'/>
                    <button type="submit">REACH US</button>
                    </div>
                </form>
                <div className='follow-us-contacts'>
                    <div className='follow-us-phone'>
                        <div className='follow-us-phone-h2'>
                            <h2>Phone</h2>
                        </div>
                        <div className='follow-us-phone-p'>
                            <div><img src={iconPhone} alt="" /><p>+380980099777</p></div>
                            <div><img src={iconPhone} alt="" /><p>+380980099111</p></div>
                        </div>
                    </div>
                    <div className='follow-us-address'>
                        <div className='follow-us-address-h2'>
                            <h2>Address</h2>
                        </div>
                        <div className='follow-us-address-p'>
                            <div><p>OPENING HOURS: 8 TO 11 P.M.</p></div>
                            <div><img src={iconStreet} alt="" srcset="" /><p>15/4 Khreshchatyk Street, Kyiv</p></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='follow-us-image-div'>
                <div className='follow-us-image'>
                    <img src={bigImage} alt="" />
                </div>
                <div className='follow-us-icons'>
                    <div className='follow-us-icons-h2'>
                        <h2>Follow us</h2>
                    </div>
                    <div className='follow-us-icons-img'>
                        <a href="#"><img src={iconInstagram} alt="" /></a>
                        <a href="#"><img src={iconPinterest} alt="" /></a>
                        <a href="#"><img src={iconFacebook} alt="" /></a>
                        <a href="#"><img src={iconTwitter} alt="" /></a>
                        <a href="#"><img src={iconTelegram} alt="" /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}