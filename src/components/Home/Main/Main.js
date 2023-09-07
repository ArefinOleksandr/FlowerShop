import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './Main.css';
import '../../Shared/Animations/Animations.css';


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
            <div style={{position: 'sticky',
        bottom: isSticky ? 'auto' : '0'}}>
                <div>
                    <h1><span className='overflow-hidden-row'><span style={{animation: 'anim-text-from-bottom-to-top 1.5s'}}>Kyiv</span></span><span><span style={{animation: 'anim-text-from-bottom-to-top 1.5s'}}>Luxe</span><span style={{animation: 'anim-text-from-bottom-to-top 1.5s'}}>Bouquets</span></span></h1>
                    <p style={{animation: 'anim-text-from-bottom-to-top 1.5s'}}>
                        <span className='overflow-hidden-row'><span style={{animation: 'anim-text-from-bottom-to-top 1.5s'}}>Discover Uniquely Crafted Bouquets</span></span>
                        <span className='overflow-hidden-row'><span style={{animation: 'anim-text-from-bottom-to-top 1.5s'}}>and Gifts for Any Occasion: Spread</span></span>
                        <span className='overflow-hidden-row'><span style={{animation: 'anim-text-from-bottom-to-top 1.5s'}}> Joy with Our Online Flower Delivery Service</span></span></p>
                </div>
                <div>
                    <div>
                        <img src={imgHero} alt="" srcset="" /><div style={{animation: 'white-opacity-image 1.5s'}}></div>
                    </div>
                    <div>
                        <span className='overflow-hidden-row'><span style={{animation: 'anim-text-from-bottom-to-top 1.5s'}}>Experience the joy of</span></span>
                        <span className='overflow-hidden-row'><span style={{animation: 'anim-text-from-bottom-to-top 1.5s'}}> giving with our modern floral studio.</span></span> 
                        <span className='overflow-hidden-row'><span style={{animation: 'anim-text-from-bottom-to-top 1.5s'}}>Order online and send fresh flowers, plants and gifts today.</span></span>
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
                id: 1,
                url: 'fresh_flowers'
            },
            {
                text: 'Dried Flowers',
                img: driedFlowers,
                id: 2,
                url: 'dried_flowers'
            },
            {
                text: 'Live Plants',
                img: livePlants,
                id: 3 ,
                url: 'live_plants'
            },
            {
                text: 'Aroma Candels',
                img: aromaCandels,
                id: 4 ,
                url: 'aroma_candels'
            },
            {
                text: 'Fresheners',
                img: fresheners,
                id: 5 ,
                url: 'fresheners'
            }
        ]
    
    
    return (
        <div className='main-right-section'>
                {arrSectionMain.map((item) => (
                    <div className={'section-main' + ((item.id % 2 == 0) ? ' left-image' : ' right-image')}>
                        <div>
                            <h1>{item.text}</h1>
                            <Link to={'/category?category=' + item.url}>Shop now</Link>
                        </div>
                        <Link to={'/category?category=' + item.url}><img src={item.img} alt="" /></Link>
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