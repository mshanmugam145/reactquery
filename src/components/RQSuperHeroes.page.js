import { useQuery } from "react-query"
import axios from "axios";
import { useSuperHeroesData } from "../hooks/useSuperHeroesData";

// const fetchData = () => {
//     return axios.get('http://localhost:4000/superheroes')
// }

export const RQSuperHeroesPage = () => {

    const onSuccess = (data) => {
        console.log(`Perform side effect after  data fetching - ${data}`);
    }

    const onError = (error) => {
        console.log(`Perform side effect after Error - ${error}`);
    }

    // calling useQuery and axios 
    // const { isLoading, data } = useQuery('super-heroes', () => {
    //     return axios.get('http://localhost:4000/superheroes')
    // })

    // calling useQuery and axios in separate function
    // const { isLoading, data, isError, error, isFetching, refetch } = 
    // useQuery('super-heroes', fetchData, {
    //     // cacheTime: 5000, // default is 5 mins
    //     // staleTime: 3000, // 0 secs default
    //     // refetchOnMount: true, // true is default, "always", "false"
    //     // refetchOnWindowFocus: true, // true is default, , "always", "false"
    //     // refetchInterval: 2000,  // polling - false is default, millisecs  
    //     // refetchIntervalInBackground: true, //default is true,
    //     // enabled: false, // onClick, onChange event - true is default,
    //     onSuccess: onSuccess, // sideEffects - this is used for side effects when response succeess
    //     onError: onError, // sideEffects - this is used for side effects when response failed
    //     select: (data) => { // used for data transformation 
    //         const superHeroesNames = data?.data.map((item) => item.name)
    //         return superHeroesNames;
    //     }
    // });

    const { isLoading, data, isError, error, isFetching, refetch } = useSuperHeroesData(onSuccess, onError);

    console.log(`${isFetching} - ${isLoading}`);

    if(isLoading){
        return <h2>Loading ... </h2>
    }
    if(isError){
        return <h2>{error.message}</h2>
    }

    return (
        <>
            <h2>RQ  Super Hero page</h2>
            <button onClick={refetch}>Fetch</button>
            {/* {
                data?.data.map(item => { 
                    return (
                        <div key={item.id}>
                            {item.name}
                        </div>
                    )
                })
            } */}

            {
                data.map(superHero => {
                    return <div key={superHero}>{superHero}</div>
                })
            }
        </>
    )
}
  
    