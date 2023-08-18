import React from 'react';
import {useLocation} from 'react-router-dom';
import { Navbar } from '../Shared/Navbar/Navbar';
import { Footer } from '../Shared/Footer/Footer';

import './Category.css';

import freshImage from '../../images/FreshImage.png';

const categorys = {
    fresh_flowers:[
        {   
            id: 1,
            img: require('../../images/Items/SnowFail.jpg'),
            name: 'Snow Fail',
            price: 70
        },
        {   
            id: 2,
            img: require('../../images/Items/DownsDelight.png'),
            name: 'Downs Delight',
            price: 70
        },
        {   
            id: 3,
            img: require('../../images/Items/PinkElegance.png'),
            name: 'PinkElegance',
            price: 70
        },
        {   
            id:4,
            img: require('../../images/Items/RusticCharm.png'),
            name: 'RusticCharm',
            price: 70
        },
        {   
            id: 5,
            img: require('../../images/Items/AutumnSymphony.png'),
            name: 'AutumnSymphony',
            price: 70
        },
        {   
            id: 6,
            img: require('../../images/Items/RosyDelight.png'),
            name: 'RosyDelight',
            price: 70
        },
        {   
            id: 7,
            img: require('../../images/Items/Serenity.png'),
            name: 'Serenity',
            price: 70
        },
        {   
            id: 8,
            img: require('../../images/Items/BlueHarmony.png'),
            name: 'BlueHarmony',
            price: 70
        },
        {   
            id: 9,
            img: require('../../images/Items/MysticalMajesty.png'),
            name: 'MysticalMajesty',
            price: 70
        },
        {   
            id: 10,
            img: require('../../images/Items/BlazingBlossoms.png'),
            name: 'BlazingBlossoms',
            price: 70
        },

],

    
}

function ImageSection(){
    return (
        <div className='image-section'>
            <img src={freshImage} alt="" /><div></div>
        </div>
    )
}

function ItemsSection(props){
    return(
        <div className='items-section'>
            {
                categorys[props.category].map((item) => (
                    <a href="#" className={!(item.id%2 == 0) ? 'grid-first-column' : 'grid-second-column'}>
                        <div>
                            <img
                                style={{
                                    animation: 'img-scale 1s'
                                }}
                            src={item.img} alt="" />
                            <h2>{item.name}</h2>
                            <p>price {item.price}$</p>
                            
                        </div>
                        
                        
                    </a>
                ))
            }
        </div>
    )
}


export function Category(){
    const location = useLocation()
    const queryParams = new URLSearchParams(location.search)
    const category = queryParams.get('category');



    return (
        <div>
            <Navbar />
            <main className='category-main'>

                <ImageSection />
                <ItemsSection category={category}/>
            </main>
            <Footer />
        </div>
    )
}