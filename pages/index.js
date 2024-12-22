import Layout from '../components/Layout';
import ImageCarousel from '../components/ImageCarousel';

const Index = () => {
  const slides = [
    { image: '/images/image1.jpg', text: 'Instalaciones Eléctricas Nuevas' },
    { image: '/images/image2.jpg', text: 'Mantenimiento General y Refacciones' },
    { image: '/images/image3.jpg', text: 'Sistemas de Seguridad y Vigilancia' },
  ];

  return (
    <Layout>
      <div className="text-center">
        <ImageCarousel slides={slides} />
        <p>✔ Instalaciones Eléctricas Nuevas</p>
        <p>✔ Mantenimiento General y Refacciones</p>
        <p>✔ Planos y Cálculos Eléctricos</p>
        <p>✔ Entubado y canalización eléctrica en losas y contrapisos</p>
        <p>✔ Domótica (Casas Inteligentes)</p>
        <p>✔ Sistemas de Seguridad y Vigilancia (Cámaras, Alarmas, Intercomunicadores)</p>
        <p>✔ Sistemas de puesta a tierra y tableros eléctricos</p>

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
