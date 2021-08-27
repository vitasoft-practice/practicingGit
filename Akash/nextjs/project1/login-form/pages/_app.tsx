import "../styles/globals.css";
import "../styles/login.css";
import type { AppProps } from "next/app";
import Navigation from "../components/Navigation";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
    
  );
}
export default MyApp;
