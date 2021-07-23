import React from "react"

//defining hhe shape of the article
interface ArticleInterface{
    id:number,
    title:string,
    body:string
}

type ArticleState={
    articles: ArticleInterface[]
}

type ArticleAction ={
    type:string
    article:ArticleInterface
}

type DispatchType =(args: ArticleAction)=>ArticleAction