import { InferGetStaticPropsType } from 'next'
import { GetStaticProps } from 'next'
import Link from 'next/link'

export interface person {
    id:number;
    email:string;
    first_name:string;
    last_name:string;
    avatar:string;
}[];

export const getStaticProps: GetStaticProps = async () => {
    const res = await fetch('https://reqres.in/api/users');
    const datas = await res.json();
    const users = datas.data;

    return {
        props: {
            users
        },
    }
}

const users = ({ users }: any) => {
    return (
        <>
            <h2>Data form api </h2>

            {
                users.map((curData: person) => {
                    return (
                        <>
                            <h4 style={{ color: 'blue' }}>
                                <Link href={`/posts/${curData.id}`} key={curData.id}><a>{curData.email}</a></Link>
                            </h4>
                        </>

                    )
                })
            }

            <p>Hello this is dynamic pre-rendering data fetching</p>
        </>
    )
}

export default users