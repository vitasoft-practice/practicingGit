import { ArticleInterface , ArticleAction, ArticleState, DispatchType} from "../type";
import * as actionTypes from "./actionTypes"

export function addArticle(article: ArticleInterface)
{
    const action: ArticleAction ={
        type:actionTypes.ADD_ARTICLE,
        article
    }
    return simulateHttpRequest(action)
}
export function removeArticle(article: ArticleInterface) {
    const action: ArticleAction = {
      type: actionTypes.REMOVE_ARTICLE,
      article,
    }
    return simulateHttpRequest(action)
  }
  
  export function simulateHttpRequest(action: ArticleAction) {
    return (dispatch: DispatchType) => {
      setTimeout(() => {
        dispatch(action)
      }, 500)
    }
  }