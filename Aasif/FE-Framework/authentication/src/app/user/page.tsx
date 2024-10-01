import Image from "next/image";
import styles from "../page.module.scss";
import Card from "@/components/Card/Card";
import { CardType } from "@/constant";
import { cookies } from "next/headers";

export default async function Home() {
    const token: string | undefined = cookies().get('token')?.value;
    console.log(token, 'token')
    let data = await fetch(`http://localhost:3000/api/user`)
    let users = await data.json()

    return (
        <div className={`${styles.card_container} ${'pt-2'}`}>
            {users.map((el: CardType) => <Card {...el} key={el.id} />)}
        </div>
    )
}
