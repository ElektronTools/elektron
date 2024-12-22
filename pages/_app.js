import 'bootswatch/dist/solar/bootstrap.min.css'
import ScrollToTopButton from '../components/ScrollToTopButton'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <ScrollToTopButton />
    </>
  )
}
