import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import './Navbar.css'

 export function Navbar(){
    const [mobileState, setMobileState] = useState(window.innerWidth<=992);
    const [linesButtonState, setLinesButtonState] = useState(false);
    
    useEffect(() => {
        const handleResize = () => {
            setMobileState(window.innerWidth <= 992);
            console.log(window.innerWidth)
        }

        window.addEventListener('resize', handleResize);
        
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);
    const handleClickButton = () => {
        (linesButtonState == true) ? setLinesButtonState(false) : setLinesButtonState(true);
    }

    return mobileState ? (
        <nav>
            <div>
                <div className='menu-button' onClick={handleClickButton}>
                    <span className={linesButtonState && 'first-line'}></span>
                    <span className={linesButtonState && 'second-line'}></span>
                    <span className={linesButtonState && 'third-line'}></span>
                </div>
                <div></div>
                <div></div>
                <div className='shop-cart'></div>
            </div>
            <ul className={'menu ' + (linesButtonState && 'menu-active')}>
                <li><a href="#">Sing in</a> </li>
                <li><a href="#">Home</a></li>
                <li><a href="#">Servise</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">About us</a></li>
            </ul>
        </nav>
    ) : 
    (
        <nav>
            <ul>
                <li>
                    <a href='#'>Shop</a>
                </li>
                <li>
                    <a href='#'>Contact</a>
                </li>
            </ul>
            <div></div>
            <div></div>
            <ul>
                <li>
                    <a href='#'>Sign In</a>
                </li>
                <li>
                    <a href='#'>Cart</a>
                </li>
            </ul>
        </nav>
    )
}