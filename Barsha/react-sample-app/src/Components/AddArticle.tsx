import  * as React from "react"
import { ArticleInterface } from "../type"

type Props ={
    saveArticle: (article: ArticleInterface | any) =>void
}

export const AddArticle:React.FC<Props>=({saveArticle})=>{
    const [article, setArticle] = React.useState<ArticleInterface | {}>()

    const handleArticleData =( e: React.FormEvent<HTMLInputElement>) =>{
        setArticle({
            ...article,
            [e.currentTarget.id]:e.currentTarget.value,
        })
    }

    const addNewArticle = (e:React.FormEvent)=>{
        e.preventDefault()
        saveArticle(article)
    }

    return(
        <form onSubmit ={addNewArticle} >
            <input type="text" id="title" placeholder="Title" onChange ={handleArticleData} />
            <input type="text" id="body" placeholder="Description" onChange ={handleArticleData} />
            <button disabled ={article === undefined ? true :false}>Add Article</button>
        </form>
    )
}