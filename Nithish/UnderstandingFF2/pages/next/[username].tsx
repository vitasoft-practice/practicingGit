import { useRouter } from 'next/router';
import button from '../../styles/button.module.scss';
import { FC } from 'react';
import { dataFetcher, fetchAnime } from '../../helperFunctions/dataFetcher';
import { resolveHref } from 'next/dist/next-server/lib/router/router';
import { GetServerSideProps } from 'next';
import ReduxForms from './reduxForm';
import table from '../../styles/animeTable.module.scss';

export const getServerSideProps: GetServerSideProps = async (context) => {
    const val = await fetchAnime();
    return {
        props: {
            val,
        }
    }
}
// interface animeArray {
//     [index: number]: {
//         id: number,
//         title: string,
//         year: string
//     };
// }
interface Animeprops {
    val: {
        id: number,
        title: string,
        year: string,
    }[]
}
const Next = ({ val }: Animeprops) => {
    const router = useRouter();
    const username = router.query.username;
    console.log(val);
    // const anime = data();
    // console.log(anime);

    return (
        <div>
            <h1>Hello!, {username}</h1>
            <p>See the search bar?, Says /next/Andrew, This is dynamic routing</p>
            <hr></hr>
            <div className={table.table} >
                <div className={table.row}>
                    <label className={table.label}>ID</label>
                    <label className={table.label}>Title</label>
                    <label className={table.label}>Year</label>
                </div>
                {
                    val.map(value => (
                        <div className={table.row} key={value.id}>
                            <label className={table.label}>{value.id}</label>
                            <label className={table.label}>{value.title}</label>
                            <label className={table.label}>{value.year}</label>
                        </div>
                    ))
                }
            </div>
            <div className={table.doc}>
                <p>
                    Above table is a piece of data fetched from the api backend sent via '/api/displayAnime' by the getServersideProps() function!.
                </p>
                <ul>
                    <li>Data is passed from a seperate file in the main directory named 'data.ts'</li>
                    <li>Data is fetdhed by a heperfunction named fetchAnime() in 'helperFunctions/dataFetcher.ts'</li>
                    <li>Data is receieved from the fetcher by gerServersideProps() in '/pages/next/[username].tsx'</li>
                </ul>
            </div>

        </div>
    )
}
export default Next;