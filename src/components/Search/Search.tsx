import { FC } from 'react';
import { useData } from '../../context/DataContext';
import './Search.css';

export const Search: FC = () => {
   const { dispatch } = useData();

   return (
      <>
         <input
            className='header__search--input'
            type='search'
            placeholder='Search'
            onChange={(event) => {
               dispatch({
                  type: 'SEARCH',
                  payload: event.target.value,
               });
            }}
         />
      </>
   );
};
