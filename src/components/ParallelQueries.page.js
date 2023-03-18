import React from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'

const fetchSuperHeroes = () => {
    return axios.get('http://localhost:4000/superheroes')
}

const fetchFriends = () => {
    return axios.get('http://localhost:4000/friends')
}

function ParallelQueriesPage() {
    const { data: superHero } = useQuery('super-hero', fetchSuperHeroes);
    const { data: friends } = useQuery('friends', fetchFriends);


  return (
    <div>ParallelQueriesPage</div>
  )
}

export default ParallelQueriesPage