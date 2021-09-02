import { useEffect } from 'react';
import { Header } from './components/Header/Header';
import { useData } from './context/DataContext';
import { Articles } from './pages/Articles/Articles';
import getNewArticles from './services/getNewArticles';

function App() {
   const {
      state: { page },
      dispatch,
   } = useData();

   useEffect(() => {
      try {
         getNewArticles(page, '').then((data) => {
            console.log(data);
            dispatch({ type: 'SET_ARTICLES', payload: data });
         });
         console.log(getNewArticles);
      } catch {
         console.log('error');
      }
   }, [page]);

   return (
      <div className='container'>
         <Header />
         <Articles />
      </div>
   );
}

export default App;
