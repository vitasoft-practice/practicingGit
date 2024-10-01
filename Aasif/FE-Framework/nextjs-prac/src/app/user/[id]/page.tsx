import { ApiUrl } from "@/constant"
import styles from '@/app/page.module.scss'

async function ViewUser({ params }: { params: { id: string } }) {

    let data = await fetch(`${ApiUrl}/user/${params.id}`)
    let user = await data.json()
    return (
        <div className={`${styles.card_container} ${styles['h-100']}`}>
            <div className={styles.view_container}>
                <div className={styles.view_data}>
                    <p>ID</p>
                    <p>{user.id}</p>
                </div>
                <div className={styles.view_data}>
                    <p>Name</p>
                    <p>{user.name}</p>
                </div>
                <div className={styles.view_data}>
                    <p>Role</p>
                    <p>{user.role}</p>
                </div>
            </div>
        </div>
    )
}

export default ViewUser