import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

export default function Banner() {
  return (
    <>
      <Carousel controls={false} indicators={false}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://fakeimg.pl/800x400/"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://fakeimg.pl/800x400/"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://fakeimg.pl/800x400/"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </>
  )
}
