import React from 'react';
import { Link } from 'react-router-dom';

import {useLocation} from 'react-router-dom';
import { Navbar } from '../Shared/Navbar/Navbar';
import { Footer } from '../Shared/Footer/Footer';


import './Category.css';

import freshImage from '../../images/FreshImage.png';
import { categorys } from '../Shared/Items/items.data';


    


function ImageSection(props){
    const category = props.category.replace(/_/g, " ");
   
    return (
        <div className='image-section'>
            <div>
                
            <img src={freshImage} alt="" />
            <h1>{category}</h1>
            </div>
        </div>
    )
}

function ItemsSection(props){
    return(
        <div className='items-section'>
            {
                categorys[props.category].map((item) => (
                    <Link to={'/item?category='+props.category+'&&item='+item.url} className={!(item.id%2 == 0) ? 'grid-first-column' : 'grid-second-column'}>
                        <div className='img-scale-parrent'>
                            <img
                                style={{
                                    animation: 'img-scale 1s'
                                }}
                            src={item.img} alt="" />
                            <h2>{item.name}</h2>
                            <p>price {item.price}$</p>
                            
                        </div>
                        
                        
                    </Link>
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

                <ImageSection category={category}/>
                <ItemsSection category={category}/>
            </main>
            <Footer />
        </div>
    )
}