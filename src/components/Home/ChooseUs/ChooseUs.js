import React, {useEffect, useRef, useState} from 'react';

import './ChooseUs.css';

export function ChooseUs(){

    const [isVisible, setIsVisible] = useState(false);
    
    const [isSticky, setIsSticky] = useState(false);
  
    const elementRef = useRef(null);
    useEffect(() => {
      
      const handleScroll = () => {
        const rect = elementRef.current.getBoundingClientRect();
        if(rect.y < 700 && rect.y > -2000){
            setIsVisible(true);
        }
        else{
            setIsVisible(false);
        }
        const scrollTop = window.scrollY;
        if (scrollTop > 1900 && scrollTop< 2700) {
            setIsSticky(true);
        } else {
            setIsSticky(false);
        }

      };
      
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, [])
    return (
        <div ref={(elementRef)} className='choose-us-section'>
            <div className={isVisible ? 'anim choose-us-h1' : 'none-anim choose-us-h1'}>
               <h1 style={{position: isSticky ? 'sticky' : 'sticky',
            bottom: isSticky ? 'auto' : '0'}}>
                Why choose us ?
                </h1>
            </div>
            <div className={isVisible ? 'anim' : 'none-anim'}>
                <div>
                    <h2>
                        Stylish bouquets by florists
                    </h2>
                    <p>
                        At our floral studio, our professional florists craft the most elegant and stylish bouquets using only the freshest and highest quality materials available. We stay up-to-date with the latest floral design trends and offer unique arrangements that are sure to impress. Let us brighten up your day with our stunning bouquets and same-day delivery service.
                    </p>
                </div>
                <div>
                    <h2>
                    On-time delivery    
                    </h2>
                    <p>
                    Never miss a moment with our on-time flower delivery service. Our couriers will deliver your bouquet personally, without boxes, to ensure it arrives in perfect condition. Trust us to deliver your thoughtful gift reliably.
                    </p>
                </div>
                <div>
                    <h2>
                    Safe payment
                    </h2>
                    <p>
                    You can feel secure when placing an order with us, as we use industry-standard security measures to protect your payment information. Your transaction will be safe and hassle-free, so you can shop with confidence.
                    </p>
                </div>
                <div>
                    <h2>
                    Subscription by your needs
                    </h2>
                    <p>
                    With our subscription service tailored to your specific needs, you can enjoy the convenience of having beautiful bouquets delivered straight to your door at regular intervals. Our flexible service is perfect for busy individuals or those who want to ensure they always have fresh flowers on hand. You'll save time and money with this hassle-free solution to your floral needs.
                    </p>
                </div>
            </div>
        </div>
    )
}