'use client'

import { setSearch } from '@/app/redux/actions/countersAction';
import { useAppDispatch } from '@/app/redux/store';
import React from 'react'

const SearchBar = () => {

    const dispatch = useAppDispatch()
    const search_input_id = "user_search";
    const handleSubmit = (e: any) => {
        e.preventDefault()
        dispatch(setSearch(e.target[search_input_id].value))
    }
    return (
        <div className='p-2'>
            <form onSubmit={handleSubmit}>
                <input id={search_input_id} name="search" autoComplete='off' />
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default SearchBar