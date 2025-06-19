import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const jpgs = import.meta.glob('../assets/nailsImages/*.jpg', { eager: true });
const jpegs = import.meta.glob('../assets/nailsImages/*.jpeg', { eager: true });

const images = { ...jpgs, ...jpegs };

const imageUrls = Object.values(images).map((img) => img.default);

import './PhotoCarousel.css'

const PhotoCarousel = () => (


  <div className="divy2">
    <div className="divy">
      <Carousel>
        {imageUrls.map((url, index) => (
          <div key={index}>
            <img src={url} className="nailsImages" alt={`Nail ${index + 1}`} />
          </div>
        ))}
      </Carousel>
    </div>
  </div>
);

export default PhotoCarousel;

//import vanessaImg from './assets/vanessa.jpeg';
//<img src={vanessaImg} className="headshotImg" />