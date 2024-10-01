import { ApiUrl, CardType } from "@/constant"
import styles from './page.module.scss'
import Card from "@/components/Card/Card"

export default async function Home() {
  let data = await fetch(`http://localhost:3000/api/user`)
  let users = await data.json()

  return (
    <div className={`${styles.card_container} ${'mt-2'}`}>
      {users.map((el: CardType) => <Card {...el} key={el.id}/>)}
    </div>
  )
}