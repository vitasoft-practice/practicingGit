import type { NextPage } from 'next'
import Form from '../Homepage/form'
import Form2 from '../Homepage/form2'
import Form3 from '../Homepage/form3'
import Form4 from './form4'
import Form5 from './form5'
import classes from './top.module.scss'

// import classes from '../styles/globals.scss'


const Home: NextPage = () => {
  return (
    <div className={classes.top}>
      <Form/>
      <Form2/>
      <Form3/>
      <Form4/>
      <Form5/>
    </div>
  )
}

export default Home