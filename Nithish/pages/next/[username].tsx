import {useRouter} from 'next/router';
import button from '../../styles/button.module.scss';
const Next = () => {
    const router = useRouter();
    const username = router.query.username;
    return(
        <div>
            <h1>Hello!, {username}</h1>
            <button className={button.button}>Sign Out</button>
        </div>
    )
}
export default Next;