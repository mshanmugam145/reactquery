import './App.css';
// import { SuperHeroesPage } from './components/SuperHeroes.page';
// import { RQSuperHeroesPage } from './components/RQSuperHeroes.page';
// import { HomePage } from './components/Home.page';
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { QueryClient, QueryClientProvider } from 'react-query';
// import { RQSuperHeroesPage } from './components/RQSuperHeroes.page';
import { ReactQueryDevtools } from 'react-query/devtools';
// import ParallelQueriesPage from './components/ParallelQueries.page';
// import { DynamicParallelPage } from './components/DynamicParallel.page';
// import DependentQueriesPage from './components/DependentQueries.page';
// import PaginatedQueriesPage from './components/PaginatedQueries.page';
import InfiniteQueriesPage from './components/InfiniteQueries.page';
import { ReactQSuperHeroesPage } from './components/ReactQSuperHeroes.page';
// Create a client
const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        {/* <RQSuperHeroesPage /> */}
        {/* <ParallelQueriesPage /> */}
        {/* <DynamicParallelPage heroIds={[1,2]} /> */}
        {/* <DependentQueriesPage email="shan@gmail.com" /> */}
        {/* <PaginatedQueriesPage /> */}
        {/* <InfiniteQueriesPage /> */}
        <ReactQSuperHeroesPage />
      </div>
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
    </QueryClientProvider>

  );
}

export default App;
