// C:\Users\luala\Desktop\ElektronTools_Proyect\pages\Servicios.js
import Layout from '../components/Layout';
import ImageCarousel from '../components/ImageCarousel';

const Servicios = () => {
  const images = [
    '/images/image1.jpg',
    '/images/image2.jpg',
    '/images/image3.jpg',
  ];

  const containerStyle = {
    textAlign: 'center',
  };

  return (
    <Layout>
      <div style={containerStyle}>
        <h1>Nuestros servicios</h1>
      </div>
      <ImageCarousel images={images} />
    </Layout>
  );
};

export default Servicios;
