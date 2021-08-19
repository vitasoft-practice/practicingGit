import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link"
import  About  from './about'
import  FirstPost  from './posts/first-post'
import { getSortedPostsData } from '../lib/posts'
import { GetStaticProps } from 'next'
import CreateForm from '../component/createForm'
import { Button, Container } from '@material-ui/core'
import ReduxForm from './ReduxForm'
import { increment_counter } from '../redux/actions/counterAction'

//  interface allPostsData{
//    date:string,
//    title:string,
//    id:string
//  }[]

export interface IUser {
  firstName: string;
  lastName: string;
}
export default function Home({
  allPostsData
}: {
  allPostsData: [{
    date: string
    title: string
    id: string
  }]
}) {
  const greetTheUser = (user: IUser) => alert(`Hi, ${user.firstName} ${user.lastName}!`);
  const submit = (values:any)=>{console.log(values)}
  return (
    <Container fixed>
      Learn Next.js using Typescript!
      {/* <Link href="/posts/first-post">
        <h2>first post</h2>
      </Link> */}
      <Link href="/about">
        <h2>About Page</h2>
      </Link>

    <section>
      <h2>Blog</h2>
      <ul>
        {allPostsData.map(({id,date,title})=>(
          <li key={id}>
            {id}
              <br />
            <p>{title}</p>
              <small>
                <h3>{date}</h3>
              </small>
              <Button onClick={increment_counter}>Like </Button>
              
          </li>
        ))}
      </ul>
    </section>

<Container maxWidth="sm">
          <CreateForm/>

  </Container>

  <h2>Redux Form + Typescript example</h2>
         <ReduxForm onSubmit={submit}/>
    </Container>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}