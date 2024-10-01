'use client'

import styles from "@/app/page.module.scss";
import { useAppSelector } from "@/app/redux/store";
import UserCard from "@/components/Card/UserCard";
import { ApiUrl, UserT } from "@/constant";
import axios from "axios";
import { useEffect, useState } from "react";
import PaginationComp from "../Pagination/Pagination";

export default function AllUsers({ token }: { token: string | undefined }) {
    const [users, setUsers] = useState({
        data: [],
        total_pages: 1
    })

    const [page, setPage] = useState(1)

    const { search } = useAppSelector(state => state.counter)

    const fetchUsersData = (search: string) => {
        axios.get(`${ApiUrl}/user?search=${search}&page=${page}&limit=2`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(res => res.data.data).then(res => setUsers(res))
    }

    useEffect(() => {
        fetchUsersData(search)
    }, [search, page])

    useEffect(() => {
        setPage(1)
    }, [search])


    return (
        <>
            <div className={`${styles.card_container} ${'p-2'}`}>
                {users.data.map((el: UserT) => <UserCard {...el} key={el._id} />)}
            </div>

            <PaginationComp total_pages={users.total_pages} page={page} setPage={setPage} />
        </>
    )
}
