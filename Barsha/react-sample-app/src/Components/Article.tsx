import * as React from "react"
import { Dispatch } from "redux"
import { useDispatch } from "react-redux"
import { ArticleInterface } from "../type"

type Props ={
    article : ArticleInterface
    removeArticle : (article : ArticleInterface)=>void
}

export const Article:React.FC<Props> =({article, removeArticle})=>{
    const dispatch:Dispatch<any> = useDispatch()

    const deleteArticle = React.useCallback(
        (article:ArticleInterface)=> dispatch(removeArticle(article)),
        [dispatch, removeArticle]
    )

    return(
        <div>
            <h1>{article.title}</h1>
            <p>{article.body}</p>

            <br/>
            <button onClick ={()=>deleteArticle(article)}>Delete</button>
        </div>
    )
}