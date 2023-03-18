import { useState, useEffect } from 'react';
import axios from 'axios';
// import {useQuery, useMutation, useQueryClient, QueryClient, QueryClientProvide} from '@tanstack/react-query'

export const SuperHeroesPage = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/superheroes')
        .then(response => {
            setData(response.data)
            setIsLoading(false)
        })
        .catch(err => {
            setError(err.message)
            setIsLoading(false)
        })
    }, [])
    
    if(isLoading){
        return <h2>...Loading</h2>
    }

    if(error){
        return <h2> Error </h2>
    }

    return (
        <>
        
      <div>Super Hero page</div>
      {
        data.map(item => {
            return <div key={item.id}>{item.name}</div>
        })
      }  
      </>
    )
}
  
  