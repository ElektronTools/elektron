import 'bootswatch/dist/Darkly/bootstrap.min.css'
import ScrollToTopButton from '../components/ScrollToTopButton'
import '../styles/custom.css'; // Asegúrate de que la ruta sea correcta

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <ScrollToTopButton />
    </>
  )
}
