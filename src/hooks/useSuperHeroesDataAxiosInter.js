import { useQuery, useMutation, useQueryClient } from "react-query"
import { request } from "../utils/axios-utils"

const fetchData = () => {
    // return axios.get('http://localhost:4000/superheroes')
    return request({ url: '/superheroes'})
}

const addSuperHero = (hero) => {
    // return axios.post('http://localhost:4000/superheroes11', hero)
    return request({ url: '/superheroes', method: 'POST', data: hero})
}

export const useSuperHeroesDataAxios = (onSuccess, onError) => {
    return useQuery('super-heroes', fetchData, {
        onSuccess,
        onError,
        // select: (data) => {
        //     const superHeroesNames = data.data.map((hero) => hero.name)
        //     return superHeroesNames;
        // }
    })
}

export const useAddSuperHeroesDataAxios = () => {
    const queryClient = useQueryClient();
    return useMutation(addSuperHero, {
        // onSuccess: (data) => {
        //     // queryClient.invalidateQueries('super-heroes')
        //     queryClient.setQueryData('super-heroes', (oldQueryData) =>{
        //         return {
        //             ...oldQueryData,
        //             data: [...oldQueryData.data, data.data],
        //         }
        //     })
        // }
        onMutate: async (newHero) =>{
            await queryClient.cancelQueries('super-heroes')
            const previousHeroData = queryClient.getQueryData('super-heroes')
            queryClient.setQueryData('super-heroes', (oldQueryData) =>{
                return {
                    ...oldQueryData,
                    data: [...oldQueryData.data, {id: oldQueryData?.data?.length + 1, ...newHero}],
                }
            })
            return {
                previousHeroData
            }    
        },
        onError: (_error, _hero, context) => {
            queryClient.setQueryData('super-heroes', context.previousHeroData)
        },
        onSettled: () =>{
            queryClient.invalidateQueries('super-heroes')
        }
    })
}