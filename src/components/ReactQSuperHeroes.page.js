import { useState } from 'react';
import { useAddSuperHeroesDataAxios, useSuperHeroesDataAxios } from "../hooks/useSuperHeroesDataAxiosInter";

export const ReactQSuperHeroesPage = () => {
    const [name, setName] = useState('');
    const [alterEgo, setAlterEgo] = useState('');

    const onSuccess = (data) => {
        console.log(`Perform side effect after  data fetching - ${data}`);
    }

    const onError = (error) => {
        console.log(`Perform side effect after Error - ${error}`);
    }

    const { isLoading, data, isError, error, isFetching, refetch } = useSuperHeroesDataAxios(onSuccess, onError);

    const { mutate: addHero } = useAddSuperHeroesDataAxios();

    const handleAddHeroClick = () => {
        console.log(`${name} - ${alterEgo}`);
        const hero = { name, alterEgo};
        addHero(hero);
    }    

    if(isLoading || isFetching){
        return <h2>Loading ... </h2>
    }
    if(isError){
        return <h2>{error.message}</h2>
    }

    return (
        <>
            <h2>RQ  Super Hero page</h2>
            <div>
                <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
                <input type='text' value={alterEgo} onChange={(e) => setAlterEgo(e.target.value)} />
                <button onClick={handleAddHeroClick}>Add Hero</button>
            </div>
            <button onClick={refetch}>Fetch Heroes</button>

            {
                data?.data.map(item => {
                    return <div key={item.id}>{item.name}</div>
                })
            }
        </>
    )
}
  
    