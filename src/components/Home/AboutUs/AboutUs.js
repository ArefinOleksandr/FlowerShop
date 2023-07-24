import React, {useEffect, useState, useRef} from 'react';
import './AboutUs.css';



export function AboutUs(){

    const [isSticky, setIsSticky] = useState(false);
  
    const elementRef = useRef(null);
    const handleClick = () => {
      
    }
    useEffect(() => {
      
      const handleScroll = () => {
        const rect = elementRef.current.getBoundingClientRect();
        console.log(rect);
        if(rect.y < 1200 && rect.y > -100){
          setIsSticky(true);
        }
        else{
          setIsSticky(false);
        }

        // const scrollTop = window.scrollY;
        // console.log(scrollTop);
        // if ((scrollTop > 3300 && scrollTop< 3800) || (scrollTop > 836 && scrollTop < 1300)) {
        //   setIsSticky(true);
        // } else {
        //   setIsSticky(false);
        // }
      };
      
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    return(
        <div className='about-us-section'>
            <div className='about-us-h1'>
                <h1 className={isSticky ? 'visible-elem' : 'none-visible-elem'} onClick={handleClick}>About us</h1>
            </div>
            <div ref={(elementRef)} className='about-us-content'>
                <div>
                    <h2 className={isSticky ? 'visible-elem' : 'none-visible-elem'}>
                        OUR STORY
                    </h2>
                    <h1 className={isSticky ? 'visible-elem' : 'none-visible-elem'}>
                        Lyiv LuxeBouquets
                    </h1>
                    <p className={isSticky ? 'visible-elem' : 'none-visible-elem'}>
                    We are a modern local floral studio, which specializes in the design and delivery of unique bouquets. We have the best florists who carefully select each look, our studio cooperates directly with farms for growing different flowers, so we always have fresh flowers, which are collected by our florists in exquisite bouquets. We have a collection of fresh bouquets, collections of dried bouquets, house plants, as well as fragrant candles from luxury brands to create the perfect atmosphere. Make someone's day amazing by sending flowers, plants and gifts the same or next day. Ordering flowers online has never been easier.
                    </p>
                    <a href="#" className={isSticky ? 'visible-elem' : 'none-visible-elem'}>
                        LEARN MORE
                    </a>
                </div>
                
            </div>
        </div>
    )
}