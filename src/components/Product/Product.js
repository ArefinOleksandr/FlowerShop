import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

import './Product.css';
import { Footer } from '../Shared/Footer/Footer';
import icon_rec_1 from '../../images/recomendations/06f1ddd50f3fc305ea6d70043729835e.png';
import icon_rec_2 from '../../images/recomendations/2ca93b1afa00b251b4254051d124ce4b.png';
import icon_rec_3 from '../../images/recomendations/9590c94576caf4fd72cdc2ee9319c49b.png';
import icon_rec_4 from '../../images/recomendations/98945145d394abbe8321229537d3cc1d.png'
import { Navbar } from '../Shared/Navbar/Navbar';
import { categorys} from '../Shared/Items/items.data';

const item = {
    snow_fail: {   
        id: 1,
        img: require('../../images/Items/SnowFail.jpg'),
        name: 'Snow Fail',
        price: 70,
        url: 'snow_fail'
    },
}

const combination = [
     {
        id: 1,
        img: require('../../images/combinations/1cf7706dbdcdc766b7eefadae39d6a67.jpg'),
        name:'Glass Vase',
        price : 15
    },
    {
        id: 2,
        img:  require('../../images/combinations/1e72f99c3a366fe72ae7580e7db0b0a6.jpg'),
        name:'Hammershoi',
        price : 45
    },
    {
        id: 3,
        img:  require('../../images/combinations/7a66dea591b3414cb122cd629daef0ac.png'),
        name:'Ceramic Vase',
        price : 35
    },
    {
        id: 4,
        img:  require('../../images/combinations/cfc877d71e03356a233f774d9a8438ef.jpg'),
        name:'Steel vase',
        price : 25
    },
    {
        id: 5,
        img:  require('../../images/combinations/d7838c18d1c8fc899533b04432fdf3ab.jpg'),
        name:'Bamboo',
        price : 36
    },
]

function ImageSection(props){
    return(
        <div className='product-image-section' style={{boxSizing:'border-box',border: '1px #121212 solid'}}>
            {categorys[props.category].map((item) => (
                <img src={item.url === props.item && item.img} alt="" />
            ))}
        </div>
    )
}


function BuySection(props){
    
    const [countQuantity, setCountQuantity] = useState(0);

    const handleCountMinus = () =>{
        if(countQuantity !== 0 ){
            
            setCountQuantity(countQuantity-1);
        }
    }
    const handleCountPlus = () => {
        setCountQuantity(countQuantity+1);
    }
    const styleQuantity = {
        width:'3.05vw',
        height: '3.05vw',
        textAlign:'center',
        color: '#121212',
        border: '1px #121212 solid'
    }

    return(
        <div className='product-buy-section' style={{
            boxSizing:'border-box',
            border: '1px #121212 solid',
            borderLeft: '0',
            padding: '24px',
            marginTop: '87px'}}>
            <h2>
                {props.category} <span>{props.item}</span>
            </h2>
            {categorys[props.category].map((item) => (
                <h1>{item.url === props.item && item.name + ' - ' + item.price}</h1>
            ))}
            <p>
            Large exceptional bouquet composed of a selection of David Austin roses, known for their beauty and subtle fragrance. The bouquet is accompanied by seasonal foliage which will enhance these sublime flowers even
            </p>
            <div style={{display: 'flex',flexDirection:'row', alignItems: 'baseline'}}>
                <p style={{marginRight: '20px'}}>Quantity</p>
                <button style={styleQuantity} onClick={handleCountMinus}>-</button>
                <input type="text" value={countQuantity} style={styleQuantity} />
                <button style={styleQuantity} onClick={handleCountPlus}>+</button>
            </div>
            <div>
                <p>
                    Excelent Combinations with:
                </p>

                <div className='combination'
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                }}>
                    {props.combination.map((item) => (
                        <div className='comb-item'
                        style={{
                            flex: '0 1 20%'
                        }}>
                            <img src={item.img} alt="" 
                            style={{
                                width: "100%"
                            }}/>
                            <h4 style={{margin: '0'}}>{item.name}</h4>
                            <p style={{margin: '0'}}>${item.price}</p>
                        </div>
                    ))}
                </div>
                
            </div>
            <h3>
                Price options
            </h3>
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center',}}>
                 <input type="radio" name="" id="" style={{
                    height: '24px',
                    margin: '12px'
                }} /><p style={{
                    margin: '0'
                }}>One time purchase. Price ${categorys[props.category].map((item) => (
                    <span>
                        {item.url === props.item && item.price * countQuantity}
                    </span>
                ))}</p>
            </div>
            <div style={{display: 'flex', flexDirection: 'row',alignItems: 'center'}}>
                <input type="radio" name="" id="" style={{
                    height: '24px',
                    margin: '12px'
                }} /><p style={{
                    margin: '0'
                }}>Subscribe now, and save 25% on this order. </p>
            </div>
            <button style={{
                border: '0',
                height: '24px',
                color: '#fff',
                backgroundColor: '#121212',
                margin: '24px'
            }}>ADD TO BASKET</button>
        </div>
    )
}

function Recomendations(){
    return (
        <div className='recomendations'>
            <div>
                <img src={icon_rec_1} alt="" />
                <h4>Rattan Grapefruit</h4>
                <p>price 48$</p>
            </div>
            <div>
                <img src={icon_rec_2} alt="" />
                <h4>Lime & Matcha</h4>
                <p>price 46$</p>
            </div>
            <div>
                <img src={icon_rec_3} alt="" />
                <h4>Cedar & Lavender</h4>
                <p>price 64$</p>
            </div>
            <div>
                <img src={icon_rec_4} alt="" />
                <h4>Ocean Mint</h4>
                <p>price 58$</p>
            </div>
        </div>
    )
}

export function Product(){
    const location = useLocation()
    const queryParams = new URLSearchParams(location.search)
    const category = queryParams.get('category');
    const item = queryParams.get('item')

    return(
        <div className='product-section'>
            <Navbar />
            <ImageSection item =  {item} category = {category}/>
            <BuySection combination = {combination} category = {category} item = {item} />
            <h1 className='head-rec' style={{
                borderLeft: '1px #121212 solid', 
                borderRight: '1px #121212 solid',
                margin: '0',
                padding: '24px'
                }} >You may also like...</h1>
            <Recomendations />
            <Footer />
        </div>
    )
}