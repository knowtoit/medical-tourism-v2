import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Card,
  Col,
  Row
} from "reactstrap";
import sliderImage1 from "/src/assets/images/black-background.jpg";
import sliderImage2 from "/src/assets/images/black-background.jpg";
import sliderImage3 from "/src/assets/images/black-background.jpg";
const images = [
  {
    src: sliderImage1,
    id: 1,
    header: <span className="text-white">What Clients Say</span>,
    caption: "Wynk Music is a compl pie lollipopCheese to podcasts"
  },
  {
    src: sliderImage2,
    id: 2,
    header: <span className="text-white">What Clients Say </span>,
    caption: "Cheesecake caramels caramels wafer pie lollipop."
  },
  {
    src: sliderImage3,
    id: 3,
    header: <span className="text-white">What Clients Say</span>,
    caption:
      "Candy canes canes toffee gummies soufflé fruitcake dragée icingCandy"
  }
];

const CarouselCaptions = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(0);

  const onExiting = () => {
    setAnimating(true);
  };

  const onExited = () => {
    setAnimating(false);
  };

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === images.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? images.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = images.map((item) => {
    return (
      <CarouselItem onExiting={onExiting} onExited={onExited} key={item.id}>
        <img src={item.src} className="img-fluid" alt={item.id} />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={
            <span
              style={{
                color: "white",
                fontWeight: "bold",
                fontFamily: "sans-serif"
              }}
            >
              What Clients Say
            </span>
          }
        />
      </CarouselItem>
    );
  });
  return (
    <Card>
      <style>{`
        .carousel-item img {
            width: 100%;
            height: auto;
        }

        .carousel-caption {
            position: absolute;
            top: 31%;
            left: 80%;
            transform: translate(-0%, -40%);
            width: 69%;
            text-align: center;
            color: white;
            font-weight: bold;
            font-family: sans-serif;
            padding-bottom:"1.25rem;
            margin-left:"130px";
            max-width:"300px";
            margin-bottom:"-60px";

        }
        .carousel-wrapper {
    position: relative;
    width: 100%; 
    height: auto; 
  }
  
  .main-image {
    width: 100%; 
    height: auto; 
  }
  
  .carousel-overlay {
    position: absolute;
    top: 10%; 
    right: 0; 
    width: 50%; 
  }

        /* Mobile adjustments */
        @media (max-width: 767px) {
            .carousel-caption {
                color: white;
                font-size: 0.8rem;  /* Smaller font size */
                padding: 5px;      /* Compact padding */

            }

          .carousel-caption.d-none {
           display: block !important;
           }

        .carousel-item img {
            width: 100%;
            height: 200px;
        }

        .carousel-overlay {
        width: 100%;
        top: auto;      /* Resets the top property */
        right: auto;    /* Resets the right property */
        position: static; /* Resets the position to its default static */
    }

        }
    `}</style>
      <div className="carousel-wrapper">
        <img
          src="../../../../src/assets/images/gkmTeach.jpeg"
          alt="Main Image"
          className="main-image d-none d-md-block"
        />
        <div className="carousel-overlay carousel-overlay1">
          <Carousel activeIndex={activeIndex} next={next} previous={previous}>
            <CarouselIndicators
              items={images}
              activeIndex={activeIndex}
              onClickHandler={goToIndex}
            />
            {slides}
          </Carousel>
        </div>
      </div>
    </Card>
  );
};

export default CarouselCaptions;
