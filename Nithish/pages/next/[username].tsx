import {useRouter} from 'next/router';
import button from '../../styles/button.module.scss';
const Next = () => {
    const router = useRouter();
    const username = router.query.username;
    return(
        <div>
            <h1>Hello!, {username}</h1>
            <p>See the search bar?, Says /next/Andrew, This is dynamic routing</p>
        </div>
    )
}
export default Next;