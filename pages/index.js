import Layout from '../components/Layout';
import ImageCarousel from '../components/ImageCarousel';
import ScrollToTopButton from '../components/ScrollToTopButton'

const Index = () => {
  const slides = [
    { image: '/images/image1.jpg', text: '✅ Instalaciones Eléctricas' },
    { image: '/images/image2.jpg', text: '✅ Mantenimiento General y Refacciones' },
    { image: '/images/image3.jpg', text: '✅ Planos y Cálculos Eléctricos' },
    { image: '/images/image4.jpg', text: '✅ Entubado y canalización eléctrica en losas' },
    { image: '/images/image5.jpg', text: '✅ Domótica (Casas Inteligentes)' },
    { image: '/images/image6.jpg', text: '✅ Sistemas de Seguridad y Vigilancia (Cámaras, Alarmas, Intercomunicadores)' },
    { image: '/images/image7.jpg', text: '✅ Sistemas de puesta a tierra y tableros eléctricos' },
  ];

  return (
    <Layout>
      <div className="text-center">
        <ImageCarousel slides={slides} />
        <p style={{ fontSize: '18px', lineHeight: '1.4', margin: '5px 0' }}>🎯 Atención Rápida y Garantizada</p>
        <p style={{ fontSize: '18px', lineHeight: '1.4', margin: '5px 0' }}>🚨 Emergencias 24/7</p>
        <p style={{ fontSize: '18px', lineHeight: '1.4', margin: '5px 0' }}>💡 Cotizaciones Gratis</p>
        <p style={{ fontSize: '18px', lineHeight: '1.4', margin: '5px 0' }}>📍 La Paz, El Alto, Bolivia</p>
        <p style={{ fontSize: '18px', lineHeight: '1.4', margin: '5px 0' }}>📞 Contáctanos ahora y solucionaremos tus problemas eléctricos al instante!</p>
      </div>
      <ScrollToTopButton /> {/* Aquí se añade el botón */}
    </Layout>
  );
};

export default Index;
