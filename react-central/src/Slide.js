import React from 'react';
import {Slide} from 'react-slideshow-image';
import img1 from './img/img1.jpg';
import img2 from './img/img2.jpg';
import img3 from './img/img3.png';
import './slide.css'
import 'react-slideshow-image/dist/styles.css';


const properties ={
    duration:4000,
    transirionDuration: 500,
    infinite: true,
    indicators: true,
    arrows:true
}

const Slideshow = () => {
    return (
        <div className="containerSlide">
            <Slide { ...properties}>
                <div className="each-slide">
                    <div>
                        <img src={img1} alt="img1"/>
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={img2} alt="img2"/>
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={img3} alt="img3"/>
                    </div>
                </div>
            </Slide>
        </div>
    )
}




export default Slideshow;