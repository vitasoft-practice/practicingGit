import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import isLogged from '../redux/reducers/login';
import styles from '../styles/Home.module.scss';
import ReduxForms from './next/reduxForm';




export const getStaticProps = async () => {
  const res = await fetch('https://animechan.vercel.app/api/random');
  const data = await res.json();
  return {
    props: {
      data,
    }
  }
}

interface Homeprops {
  data: {
    anime: string,
    character: string,
    quote: string
  };
}

export default function Home(data: Homeprops) {
  const quotes = data.data;
  console.log(quotes.anime)
  return (
    <div className={styles.container}>
      <Link href="/next">This Link is an implementation of File based routing taking to index.tsx under the folder next without specifying the index.tsx as the href</Link>
      <div className={styles.quote}>
        <p className={styles.quoteBody}>"{quotes.quote}"</p>
        <div className={styles.quoteChar}>-{quotes.character}({quotes.anime})</div>
      </div>
      <p>This is an example implementation of getStaticProps() which retreives data from an api that generates a random anime quote.</p>
      <p>Refresh to see a diffrent quote(API courtesy: <a href="https://github.com/rocktimsaikia">Rocktimsaikia</a>)</p>

    </div>
  )
}
