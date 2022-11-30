import Head from 'next/head'
import Image from 'next/image'
import NavBar from '../components/navbar/navbar'
import Fallpage from './fallPage/fallpage'
export default function Home() {
  return (
    <div>
    <NavBar />
    <div>
    <Fallpage />
    </div>
    
    </div>
  )
}
