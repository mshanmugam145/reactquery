import React, { Fragment } from 'react'
import axios from 'axios'
import { useInfiniteQuery } from 'react-query'

const fetchColors = ({ pageParam = 1 }) => {
    return axios.get(`http://localhost:4000/colors?_limit=2&_page=${pageParam}`)
}

function InfiniteQueriesPage() {
    const { isLoading, isError, hasNextPage, data, error, fetchNextPage, isFetching, isFetchingNextPage} = useInfiniteQuery(['colors'], fetchColors, 
    {
         getNextPageParam: (_lastPage, pages) => {
            if(pages.length < 5){
                return pages.length + 1;
            } else {
                return undefined;
            }
         }
    });

    if(isLoading) {
        return <h2>...Loading...</h2>
    }

    if(isError) {
        return <h2>{error.message}</h2>
    }

  return (
    <>
    <div>
        {
            data?.pages.map((group, i) => {
                return (
                    <Fragment key={i}>
                        {
                            group.data.map((color) => (
                                <h2 key={color.id}>{color.id} - {color.label}</h2>
                            ))
                        }
                    </Fragment>    
                )
            })
        }
    </div>
    <div>
        <button disabled={!hasNextPage} onClick={fetchNextPage}>Load More</button>
    </div>
    <div>{isFetching && !isFetchingNextPage && 'Fetching...'}</div>
    </>     
  )
} 

export default InfiniteQueriesPage