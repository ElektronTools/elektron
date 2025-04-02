import Layout from '../components/Layout';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';

const ProteusPage = () => {
  const router = useRouter();
  const [arduinoCode] = useState(`
const int ledPin = 9; 

void setup() {
  pinMode(ledPin, OUTPUT);
  digitalWrite(ledPin, LOW); 
  Serial.begin(9600);
}

void loop() {
  if (Serial.available()) {
    String command = Serial.readStringUntil('\n');
    command.trim(); 

    if (command == "1") {
      digitalWrite(ledPin, HIGH);
      Serial.println("LED ON");
    } else if (command == "2") {
      digitalWrite(ledPin, LOW);
      Serial.println("LED OFF");
    }
  }
}`);

  const copyToClipboard = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(arduinoCode);
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = arduinoCode;
        textArea.style.position = "absolute";
        textArea.style.left = "-9999px";
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
      }
      alert('Código copiado al portapapeles!');
    } catch (err) {
      alert('Error al copiar el código. Inténtalo manualmente.');
    }
  };

  return (
    <Layout footer={false} title="Descarga Proteus 8.17" dark>
      <div className='container py-5 text-center'>
        <h2 className='font-weight-bold mb-4'><strong>Proteus - Arduino - App Inventor - Bluetooth</strong></h2>
        <p className='mb-4'>
          En este laboratorio exploramos la integración entre Proteus, Arduino y App Inventor mediante comunicación Bluetooth.
          Aprenderás cómo simular y programar un sistema embebido interactivo.
        </p>
        <div className='text-start bg-dark text-light p-3 rounded position-relative'>
          <pre className='mb-0'><code>{arduinoCode}</code></pre>
          <button 
            className='btn btn-primary position-absolute top-0 end-0 m-2' 
            onClick={copyToClipboard}
          >
            Copiar Código
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default ProteusPage;