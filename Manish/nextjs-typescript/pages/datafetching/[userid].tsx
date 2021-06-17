import { person } from '../../interface'
import { GetStaticProps } from 'next'

export const getStaticPaths = async () => {
    const res = await fetch('https://reqres.in/api/users');
    const datas = await res.json();
    const users = datas.data;

    const paths = users.map((curData: person) => {
        return {
            params: { userid: curData.id.toString() },
        }

    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: any = async ({ params }: any) => {

    // const id = context.params.id;
    const res = await fetch(`https://reqres.in/api/users/${params.userid}`);
    const datas = await res.json();
    const users = datas.data;
    return {
        props: { users },
    }

}


const detailsuser = ({ users }: any) => {
    return (

        <div>
            <img src={users.avatar} alt="img" />
            <h2>{users.id}</h2>
            <h4>{users.first_name}</h4>
            <h4>{users.last_name}</h4>
            <h4>{users.email}</h4>


        </div>
    )
}
export default detailsuser