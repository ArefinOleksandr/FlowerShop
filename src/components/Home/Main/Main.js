import React, { useEffect, useState } from 'react';

import './Main.css';


const imgHero = require('../../../images/imgHero.png');
const freshFlowers = require('../../../images/cardItemFreshFlowers.png');
const driedFlowers = require('../../../images/cardItemDriedFlowers.png');
const livePlants = require('../../../images/cardItemLivePlants.png');
const aromaCandels = require('../../../images/cardItemAromaCandels.png');
const fresheners = require('../../../images/cardItemFresheners.png');
function LeftSection(){
    const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > -1 && scrollTop< 1350) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
   

    return (
        <div className='main-left-section'>
            <div style={{position: isSticky ? 'sticky' : 'sticky',
        bottom: isSticky ? 'auto' : '0'}}>
                <div>
                    <h1>Kyiv<br /><span><span>Luxe</span><span>Bouquets</span></span></h1>
                    <p>Discover Uniquely Crafted Bouquets and Gifts for Any Occasion: Spread Joy with Our Online Flower Delivery Service</p>
                </div>
                <div>
                    <div>
                        <img src={imgHero} alt="" srcset="" /><div className='white-border'></div>
                    </div>
                    <div>
                        Experience the joy of giving with our modern floral studio. Order online and send fresh flowers, plants and gifts today.
                    </div>
                </div>
            </div>
            
        </div>
    )
}
function RightSection(){
    
     const arrSectionMain = [
            {
                text: 'Fresh Flowers',
                img: freshFlowers,
                id: 1 
            },
            {
                text: 'Dried Flowers',
                img: driedFlowers,
                id: 2 
            },
            {
                text: 'Live Plants',
                img: livePlants,
                id: 3 
            },
            {
                text: 'Aroma Candels',
                img: aromaCandels,
                id: 4 
            },
            {
                text: 'Fresheners',
                img: fresheners,
                id: 5 
            }
        ]
    
    
    return (
        <div className='main-right-section'>
                {arrSectionMain.map((item) => (
                    <div className={'section-main' + ((item.id % 2 == 0) ? ' left-image' : ' right-image')}>
                        <div>
                            <h1>{item.text}</h1>
                            <a href="#">Shop now</a>
                        </div>
                        <a href="#"><img src={item.img} alt="" /></a>
                    </div>
                ))}
        </div>
    )
}

export function Main(){
    return (
        <div>
            <LeftSection />
            <RightSection />
        </div>
    )
}