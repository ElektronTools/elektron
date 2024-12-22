import Layout from '../components/Layout';
import ImageCarousel from '../components/ImageCarousel';

const Index = () => {
  const slides = [
    { image: '/images/image1.jpg', text: '✔ Instalaciones Eléctricas Nuevas' },
    { image: '/images/image2.jpg', text: '✔ Mantenimiento General y Refacciones' },
    { image: '/images/image3.jpg', text: '✔ Planos y Cálculos Eléctricos' },
    { image: '/images/image4.jpg', text: '✔ Entubado y canalización eléctrica en losas y contrapisos' },
    { image: '/images/image5.jpg', text: '✔ Domótica (Casas Inteligentes)' },
    { image: '/images/image6.jpg', text: '✔ Sistemas de Seguridad y Vigilancia (Cámaras, Alarmas, Intercomunicadores)' },
    { image: '/images/image7.jpg', text: '✔ Sistemas de puesta a tierra y tableros eléctricos' },
  ];

  return (
    <Layout>
      <div className="text-center">
        <ImageCarousel slides={slides} />
        <p>🎯 Atención Rápida y Garantizada</p>
        <p>🚨 Emergencias 24/7</p>
        <p>💡 Cotizaciones Gratis</p>
        <p>📍 La Paz, El Alto, Bolivia</p>
        <p>📞 Contáctanos ahora y solucionaremos tus problemas eléctricos al instante!</p>
      </div>
    </Layout>
  );
};

export default Index;
