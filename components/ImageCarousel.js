import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ImageCarousel = ({ slides }) => {
  const containerStyle = {
    position: 'relative',
    textAlign: 'center',
  };

  const textStyle = {
    position: 'absolute',
    top: '10px',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: 'white',
    padding: '5px 10px',
    borderRadius: '5px',
    fontSize: '16px',
    zIndex: '10',
  };

  const imageStyle = {
    maxWidth: '100%',
    height: 'auto',
  };

  return (
    <Carousel
      autoPlay={true}
      interval={2000}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
    >
      {slides.map((slide, index) => (
        <div key={index} style={containerStyle}>
          <p style={textStyle}>{slide.text}</p>
          <img src={slide.image} alt={`Slide ${index}`} style={imageStyle} />
        </div>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
