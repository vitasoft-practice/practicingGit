import { person } from '../posts/index'
import { GetStaticProps } from 'next'
import fetch from 'node-fetch'

export const getStaticPaths = async () => {
    const res = await fetch('https://reqres.in/api/users');
    const datas = await res.json();
    const users = datas.data;

    const paths = users.map((curData: person) => {
        return {
            params: { id: curData.id.toString() },
        }

    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: any = async ({ params }: any) => {

    const res = await fetch(`https://reqres.in/api/posts/${params.id}`);
    const datas = await res.json();
    const users = datas.data;
    return {
        props: { users },
    }

}


const detailsuser = ({ users }: any) => {
    return (

        <div>
        
            {/* <img src={users.avatar} alt="img" /> */}
            <h2>{users.id}</h2>
            <h4>{users.first_name}</h4>
            <h4>{users.last_name}</h4>
            <h4>{users.email}</h4>


        </div>
    )
}
export default detailsuser