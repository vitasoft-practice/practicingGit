import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link"
import  About  from './about'
import  FirstPost  from './posts/first-post'
import { getSortedPostsData } from '../lib/posts'
import { GetStaticProps } from 'next'
import CreateForm from '../component/createForm'


//  interface allPostsData{
//    date:string,
//    title:string,
//    id:string
//  }[]

export default function Home({
  allPostsData
}: {
  allPostsData: [{
    date: string
    title: string
    id: string
  }]
}) {
  return (
    <div>
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
          </li>
        ))}
      </ul>
    </section>

<section>
          <CreateForm/>

  </section>
    </div>
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