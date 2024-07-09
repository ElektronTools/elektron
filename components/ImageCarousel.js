// C:\Users\luala\Desktop\ElektronTools_Proyect\components\ImageCarousel.js
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ImageCarousel = ({ images }) => {
  const imageStyle = {
    maxWidth: '100%', // Ajustar el ancho máximo de la imagen al tamaño del contenedor
    height: 'auto', // Ajustar automáticamente la altura para mantener la proporción
  };

  return (
    <Carousel
      autoPlay={true} // Habilitar auto-play
      interval={2000} // Intervalo entre imágenes (2.5 segundos)
      infiniteLoop={true} // Repetir el carousel infinitamente
      showThumbs={false} // No mostrar miniaturas
      showStatus={false} // Desactivar indicadores de número de imágenes
    >
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`Slide ${index}`} />
        </div>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
