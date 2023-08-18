import React, { useEffect, useState, useRef } from 'react';
import subscribeImage from '../../../images/image.png'
import './OurService.css';
export function OurService(){

    const [isVisibleBg, setIsVisibleBg] = useState(false);
    const [isVisibleText, setIsVisibleText] = useState(false);
    const bgRef = useRef(null);
    const textRef = useRef(null);
    useEffect(() => {

        const handleScroll = () => {
            const rectBg = bgRef.current.getBoundingClientRect();
            if(rectBg.y < 850 && rectBg.y > -2000){
                setIsVisibleBg(true);
            }
            else{
                setIsVisibleBg(false);
            }
            const rectText = textRef.current.getBoundingClientRect();
            if(rectText.y < 1400 && rectText.y > -2000){
                setIsVisibleText(true);
            }
            else{
                setIsVisibleText(false);
            }
        }
        window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    return (
        <div className='our-service-section'>
            <div className='our-service-h1'>
                <h1><span><span ref={textRef} className={isVisibleText? 'our-service-anim-text': ''}>Our</span> <span ref={textRef} className={isVisibleText? 'our-service-anim-text': ''}>Service</span></span></h1>
            </div>
            <div className='our-service-subscribe'>
                <div className='subscribe-image'>
                    <img src={subscribeImage} alt="" />
                </div>
                <div className='subscribe-button'>
                    <h4><span><span ref={textRef} className={isVisibleText? 'our-service-anim-text': ''} >Service</span></span></h4>
                    <h2 style={
                        {
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }
                    }><span><span ref={textRef} className={isVisibleText? 'our-service-anim-text': ''} >Flower </span></span> 
                    <span><span ref={textRef} className={isVisibleText? 'our-service-anim-text': ''} >Subscriptions</span></span></h2>
                    <p>Experience the convenience and savings of regular flower deliveries with our flexible subscription service - up to 30% more profitable than one-time purchases.</p>
                    <button>SUBSCRIBE NOW</button>
                </div>
            </div>
            <div ref={bgRef} className={'our-service-inquire ' + (isVisibleBg ? 'our-service-anim-bg' : undefined)}>
                <h4>
                    Service
                </h4>
                <h2>
                    Wedding & Event Decor
                </h2>
                <p>
                Let our team of expert florists and designers create stunning, on-trend floral décor for your special day. Trust us to bring your vision to life.
                </p>
                <button>
                    INQUIRE NOW
                </button>
            </div>
        </div>
    )
}