import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from './ImageCarousel.module.css'; // Importa los estilos desde un archivo CSS

const ImageCarousel = ({ slides }) => {
  return (
    <Carousel
      autoPlay={true}
      interval={3000}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
    >
      {slides.map((slide, index) => (
        <div key={index} className={styles.slideContainer}>
          {/* Texto fuera de la imagen */}
          <div className={styles.textOutside}>
            <p>{slide.text}</p>
          </div>
          {/* Imagen */}
          <img src={slide.image} alt={`Slide ${index}`} className={styles.image} />
        </div>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
