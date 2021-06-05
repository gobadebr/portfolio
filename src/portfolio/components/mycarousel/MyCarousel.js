import React, { Component } from 'react'
import Carousel from "react-bootstrap/Carousel";
import Slide1 from "../../images/carousal/slide1.webp";
import Slide2 from "../../images/carousal/slide2.webp";
import Slide3 from "../../images/carousal/slide3.webp";
import ScrollDown from "../scrolldown/ScrollDown"

import "./MyCarousel.css"

export class MyCarousel extends Component {
    render() {
        return (
                
                <div id="home">
                    <Carousel controls={false} indicators interval={2000} pause={false}>
                    <Carousel.Item>
                    <img className="d-block w-100 custom-img" src={Slide2} alt="First slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                    <img className="d-block w-100 custom-img" src={Slide1} alt="Second slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                    <img className="d-block w-100 custom-img" src={Slide3} alt="Third slide" />
                    </Carousel.Item>
                    </Carousel>
                    <ScrollDown/>
                </div> 
        )
    }
}
export default MyCarousel;
