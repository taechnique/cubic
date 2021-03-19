import React from 'react'
import {
    Carousel
} from 'react-bootstrap'
import carousel01 from '../resource/carousel1.jpg'
import carousel02 from '../resource/carousel2.jpg'
import carousel03 from '../resource/carousel3.jpg'
function CubicCarousel(props){


    return(
      <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carousel01}
          alt="First slide"
          height="400vh"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ carousel02 }
          alt="Second slide"
          height="400vh"
        />
    
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ carousel03 }
          alt="Third slide"
          height="400vh"
        />
    
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    )
}

export default CubicCarousel