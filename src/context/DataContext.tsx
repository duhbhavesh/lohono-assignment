import { useContext, useReducer } from 'react';
import { createContext, FC } from 'react';
import { DataReducer } from '../reducer/DataReducer';
import { NewsArticles } from '../services/getNewArticles.types';
import { DataContextType } from './DataContext.types';

export const initialState: NewsArticles = {
   articles: [],
   page: 1,
   search: '',
};

const DataContext = createContext<DataContextType>({
   state: initialState,
   dispatch: () => null,
});

export const DataProvider: FC = ({ children }) => {
   const [state, dispatch] = useReducer(DataReducer, initialState);

   return (
      <DataContext.Provider value={{ state, dispatch }}>
         {children}
      </DataContext.Provider>
   );
};

export const useData = () => useContext(DataContext);
