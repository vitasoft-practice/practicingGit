import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import isLogged from '../redux/reducers/login';
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Link href="/next">Click this</Link>
    </div>
  )
}
