import { useEffect, useState } from "react";
import "./carousel.scss";

interface CarouselProps {
  images: Array<string>;
}

export default function Carousel(props: CarouselProps) {
  const initialState = {
    images: new Array<string>(),
    isPaused: false,
  };

  const [carousel, setCarousel] = useState(initialState);

  useEffect(() => {
    setCarousel({ ...carousel, images: props.images });
  }, [props.images]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!carousel.isPaused) {
        handleRight();
      }
    }, 2000);
    return () => clearInterval(interval);
  }, [carousel]);

  const handleLeft = () => {
    const images = [...carousel.images];
    if (images.length) {
      images.push(images.shift()!);
    }
    setCarousel({ ...carousel, images: images });
  };

  const handleRight = () => {
    const images = [...carousel.images];
    if (images.length) {
      images.unshift(images.pop()!);
    }
    setCarousel({ ...carousel, images: images });
  };

  const handlePause = () => {
    setCarousel({ ...carousel, isPaused: !carousel.isPaused });
  };

  return (
    <div className="carousel-container">
      {carousel.images.map((image: string | undefined, index: number) => {
        return (
          <>
            <img src={image} alt="ceva" className="carousel-image" />
          </>
        );
      })}

      <div
        className="left-arrow"
        role="button"
        onClick={() => {
          handleLeft();
        }}
      >
        left
      </div>
      <div
        className="pause"
        role="button"
        onClick={() => {
          handlePause();
        }}
      >
        {carousel.isPaused ? "play" : "pause"}
      </div>
      <div
        className="right-arrow"
        role="button"
        onClick={() => {
          handleRight();
        }}
      >
        right
      </div>
      {/* Dots */}
      <div>
        {carousel.images.map((image, index) => {
          return <span role="button" className="dot"></span>;
        })}
      </div>
    </div>
  );
}
