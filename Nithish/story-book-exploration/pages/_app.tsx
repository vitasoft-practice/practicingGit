import { AppProps } from 'next/dist/next-server/lib/router/router'
import BasicLayout from '../layout/Basic'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <BasicLayout>
      <Component {...pageProps} />
    </BasicLayout>
  )
}

export default MyApp
