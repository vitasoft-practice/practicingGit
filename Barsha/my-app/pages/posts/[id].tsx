
import React from "react"
import { getAllPostIds , getPostData } from '../../lib/posts'
import { GetStaticProps, GetStaticPaths } from 'next'


export default function Post({
    postData
  }: {
    postData: {
      title: string
      date: string
      id:string
    }
  }){
    return(<div>
        {postData.id} - {postData.date}
        <br/>
        {postData.title}
    </div>)
}
export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllPostIds()
    return {
      paths,
      fallback: false
    }
  }
  export const getStaticProps: GetStaticProps = async ({ params }) => {
    const postData = await getPostData(params.id as string)
    return {
      props: {
        postData
      }
    }
  }
