import React, {useRef, useState} from 'react';
import './Reviews.css';
import googleImage from '../../../images/googleLogo.png'

const reviews = [
    {
        id: 1, 
        text: '“Ordered flowers online and they were the best bouquet! Impressed everyone around. Highly recommend this flower shop!”',
        author: '– Ronald Richards',
    },
    {
        id: 2,
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda aspernatur dignissimos adipisci natus aut repudiandae quae dolorum dicta minima quis temporibus earum quibusdam, vitae soluta? Eaque cupiditate quia nam dolore?',
        author: '- Alex'
    },
    {
        id: 3,
        text: 'Lore ipsum',
        author: 'I'
    }
]

function Carousel(props){

    const [active, setActive] = useState(1);
    const [prevNextAnim, setPrevNextAnim] = useState(true);
    
    const handleNext = () =>{
        setPrevNextAnim(true);
        if (active<props.reviews.length) {
            setActive(active + 1);
        }
        else{
            setActive(1)
        }
    }
    const handlePrev = () => {
        setPrevNextAnim(false)
        if(active>1){
            setActive(active - 1)
        }
        else{
            setActive(props.reviews.length)
        }
    }
    const handleIndicator = (id) => {
        if(active > id) {
            setPrevNextAnim(false);
        }
        else{
            setPrevNextAnim(true);
        }
        setActive(id);
    }
    
    const indicatorRef = useRef([]);

    const updateRefsArray = (index, ref) => {
        indicatorRef.current[index] = ref;
    }

    console.log(indicatorRef.current);
    console.log(props.reviews);
    return(
        <div  className='carousel'>
                <div className="prev-button arrow-button">
                    <button className='prev'
                        onClick={handlePrev}
                    >&lt;</button>
                </div>
                <div className="inner-div">
                    <div>
                        {props.reviews.map((item) => (
                            <div className={
                                'inner-content inner-content-'+item.id + (active == item.id ? (prevNextAnim ? ' next-active active' : ' prev-active active') : 
                                (prevNextAnim ? ' not-anim-right' : ' not-anim-left'))
                                }>
                                <h2>{item.text}</h2>
                                <p>{item.author}</p>
                            </div>
                        ))} 
                    </div>
                    <div className='indicators'
                    onClick={(event) => {
                        const targetElement = event.target;
                  
                        // Проверяем, является ли элемент-цель одним из рефов
                        for (let i = 0; i < props.reviews.length; i++) {
                          const refElement = indicatorRef.current[i];
                          if (refElement === targetElement) {
                            handleIndicator(i+1);
                            break;
                          }
                        }
                      }}>
                            {
                                props.reviews.map((item) => (
                                    <div className={'indicator-' + item.id}
                                    style={
                                        item.id == active ? 
                                        {
                                            width: '12px',
                                            height: '12px',
                                            backgroundColor: '#808080',
                                            borderRadius: "50%"
                                        }
                                        :
                                        {
                                            width: '12px',
                                            height: '12px',
                                            backgroundColor: '#D2D2D7',
                                            borderRadius: "50%"
                                        }
                                    }
                                    ref={ref => updateRefsArray(item.id - 1, ref)}></div>
                                ))
                            }
                    </div>
                    
                </div>
                <div className="next-button arrow-button">
                    <button className='prev'
                    onClick={handleNext}>&gt;</button>
                </div>
        </div>
    )
}

export function Reviews(){
    
    return (
        <div className='reviews-section'>
            <div className='reviews-h4'>
                <img src={googleImage} alt="" />
                <h4>REVIEWS</h4>
                <h1>Our Clients say</h1>
            </div>
            <Carousel reviews = {reviews}/>
        </div>
      
    );
}