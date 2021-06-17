import {useRouter} from 'next/router';
const Next = () => {
    const router = useRouter();
    const username = router.query.username;
    return(
        <div>
            <h1>Hello!, {username}</h1>
        </div>
    )
}
export default Next;