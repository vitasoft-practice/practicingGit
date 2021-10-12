import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {Worker} from "@react-pdf-viewer/core"

function MyApp({ Component, pageProps }: AppProps) {
 
  return ( <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.9.359/build/pdf.worker.js">
    <Component {...pageProps} />
  </Worker>)
}
export default MyApp
