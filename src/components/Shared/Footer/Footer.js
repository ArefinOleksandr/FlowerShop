import React from 'react';

import iconFacebook from '../../../images/Facebook.svg';
import iconInstagram from '../../../images/Instagram.svg';
import iconPinterest from '../../../images/Pinterest.svg';
import iconTelegram from '../../../images/Telegram.svg';
import iconTwitter from '../../../images/Twitter.svg';


import './Footer.css';

export function Footer(){

    return(
        <div className='footer'>
            <div className='footer-remind'>
                <div className='child'>
                    <p>
                    Remember to offer beautiful flowers from Kyiv LuxeBouquets Valentines Day, Mothers Day, Christmas... Reminds you 7 days before. No spam or sharing your address
                    </p>
                    <form action="" method="post">
                        <input type="email" name="" id="" placeholder='Email' />
                        <button type="submit">REMIND</button>
                    </form>
                </div>
                
            </div>
            <div className='footer-contact-us'>
                <div>
                <h1 className='child'>
                    Contact Us
                </h1>
                <div className='child'>
                    <h2>
                        Address
                    </h2>
                    <p>
                        15/4 Khreshchatyk Street, Kyiv 
                    </p>
                </div>
                <div className='child'>
                    <h2>
                        Phone
                    </h2>
                    <p>
                        +380980099777
                    </p>
                </div>
                <div className='child'>
                    <h2>
                        General Enquiry:
                    </h2>
                    <p>
                        Kiev.Florist.Studio@gmail.com
                    </p>
                </div>
                <h1 className='child'>
                    Follow Us
                </h1>
                <div className='icons-div child'>
                    <a href="#"><img src={iconInstagram} alt="" /></a>
                    <a href="#"><img src={iconPinterest} alt="" /></a>
                    <a href="#"><img src={iconTelegram} alt="" /></a>
                    <a href="#"><img src={iconFacebook} alt="" /></a>
                    <a href="#"><img src={iconTwitter} alt="" /></a>
                </div>
                </div>
            </div>
            <div className='footer-shop'>
                <div>
                <h1 className='child '>
                    Shop
                </h1>
                <div className='column-div child'>
                    <a href="#">All Products</a>
                    <a href="#">Fresh Flowers</a>
                    <a href="#">Dried Flowers</a>
                    <a href="#">Live Plants</a>
                    <a href="#">Designer Vases</a>
                    <a href="#">Aroma Candles</a>
                    <a href="#">Freshener Diffuser</a>
                </div>
                <h1 className='child'>
                    Service
                </h1>
                <div className='column-div child'>
                    <a href="#">Flower Subcription</a>
                    <a href="#">Wedding & Event Decor</a>
                </div>
                </div>
            </div>
            <div className='footer-about-us'>
                <div>
                <h1 className='child'>
                    About Us
                </h1>
                <div className='column-div child'>
                    <a href="#">Our story</a>
                    <a href="#">Blog</a>
                </div>
                <div className='column-div child'>
                    <a href="#">Shipping & returns</a>
                    <a href="#">Terms & conditions</a>
                    <a href="#">Privacy policy</a>
                </div>
                </div>
            </div>
        </div>
    )
}