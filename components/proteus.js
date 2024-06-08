// components/Proteus.js
import React from 'react';
import Image from 'next/image';

const Proteus = () => {
  return (
    <div className='container py-5 text-center'>
      <h2 className='font-weight-bold mb-4'>Descarga Proteus 8.17</h2>
      <p className='mb-4'>
        Proteus es un software de simulación y diseño de circuitos electrónicos que permite a los usuarios crear y probar circuitos antes de implementarlos físicamente.
        Es ampliamente utilizado en la educación y en la industria para prototipar y validar diseños electrónicos.
      </p>
      <div className='d-flex flex-column align-items-center'>
        <Image
          src='/proteus.jpg' // Ruta relativa a la carpeta 'public'
          alt='Proteus 8.17'
          width={350}
          height={250}
          className='mb-4'
        />
        <a 
          href='https://drive.google.com/file/d/1SER5wiQoS8oIrhv675ThY_wSTmMMbbwE/view?usp=sharing' 
          target='_blank' 
          rel='noopener noreferrer' 
          className='btn btn-primary mb-4'
        >
          Descargar Proteus 8.17
        </a>
        <h2 className='font-weight-bold mb-4'>Descargar el traductor en español de Proteus 8.17</h2>
        <a 
          href='https://drive.google.com/file/d/1AjwK8GwHMq6M6bhRIxm01b8U15sxTxdw/view?usp=sharing' 
          target='_blank' 
          rel='noopener noreferrer' 
          className='btn btn-primary mb-4'
        >
          Descarga el traductor de Proteus
        </a>
        <h2 className='font-weight-bold mb-4'>Descargar librerias de arduino para proteus</h2>
        <a 
          href='https://drive.google.com/file/d/1AjwK8GwHMq6M6bhRIxm01b8U15sxTxdw/view?usp=sharing' 
          target='_blank' 
          rel='noopener noreferrer' 
          className='btn btn-primary mb-4'
        >
          Descargar librerias
        </a>
        <h2 className='font-weight-bold mb-4'>Video Tutorial Para Instalar Proteus</h2>
        <div className='embed-responsive embed-responsive-16by9'>
          <iframe 
            className='embed-responsive-item'
            src='https://www.youtube.com/embed/D-aJXI5bZPg' 
            title='YouTube video player' 
            frameBorder='0' 
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' 
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Proteus;
