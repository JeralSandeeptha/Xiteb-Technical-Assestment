import { useState } from "react";
import "./Slider.css"; // Import CSS file

const images = [
  'https://plus.unsplash.com/premium_photo-1669920720951-0b5443c8ca3f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXx1WDRPMVhNbGhib3x8ZW58MHx8fHx8',
  'https://plus.unsplash.com/premium_photo-1739416362627-3424cab174f3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3x1WDRPMVhNbGhib3x8ZW58MHx8fHx8',
    'https://plus.unsplash.com/premium_photo-1738832955729-0e6a1fffb80e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHx1WDRPMVhNbGhib3x8ZW58MHx8fHx8',
    'https://plus.unsplash.com/premium_photo-1739226531311-a684a10ac16e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NXx1WDRPMVhNbGhib3x8ZW58MHx8fHx8',
    'https://plus.unsplash.com/premium_photo-1713823800730-48f639cdee34?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8N3x1WDRPMVhNbGhib3x8ZW58MHx8fHx8',
    'https://plus.unsplash.com/premium_photo-1671211319850-608940f38fb4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OHx1WDRPMVhNbGhib3x8ZW58MHx8fHx8',
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slider-container">
      <button className="slider-button left" onClick={prevSlide}>
        ❮
      </button>
      <img src={images[currentIndex]} alt="Slide" className="slider-image" />
      <button className="slider-button right" onClick={nextSlide}>
        ❯
      </button>
    </div>
  );
};

export default Slider;
