import React from 'react'
import { Pagination } from '@mui/material';

type PaginationPropT = {
    total_pages: number
    page: number,
    setPage: (page: number) => void
}

const PaginationComp = ({ total_pages, page, setPage }: PaginationPropT) => {
    console.log(page)
    return (
        <div className='flex-center'>
            <Pagination
                count={total_pages}
                variant='outlined'
                color='primary'
                className='pagination'
                page={page}
                onChange={(_, val) => setPage(val)}
            />
        </div>
    )
}

export default PaginationComp;