import Head from 'next/head'
import Image from 'next/image'
import NavBar from '../components/menu/NavBar'
import Section1 from '../components/sections/section1'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>Z Suite Marketing Demo Page </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />
      <Section1 />
    </>
  )
}