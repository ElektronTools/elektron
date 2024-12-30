import Layout from '../components/Layout';

const SoporteRemoto = () => {
    return (
        <Layout>
            <div className="container mt-9">
                <h1>Soporte Remoto</h1>
                <p>Contáctanos para más información.</p>
                
                {/* Agregar la imagen */}
                <div className="image-container">
                    <img 
                        src="/remoto.png" 
                        alt="Soporte Remoto" 
                        className="img-fluid" 
                    />
                </div>
            </div>
        </Layout>
    );
};

export default SoporteRemoto;
