import { FC } from 'react';
import { useData } from '../../context/DataContext';
import './Header.css';

export const Header: FC = () => {
   const {
      state: { page },
      dispatch,
   } = useData();

   return (
      <>
         <div className='container'>
            <header className='header'>
               <div className='header__logo'>News Articles</div>
               <div className='header__actions'>
                  <div className='header__search'>
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
                  </div>
                  <div className='header__btns'>
                     <button
                        disabled={page <= 1}
                        onClick={() => dispatch({ type: 'PREV_PAGE' })}
                        className='header__btn header__btn--prev'>
                        Prev
                     </button>
                     <button
                        disabled={page >= 9}
                        onClick={() => dispatch({ type: 'NEXT_PAGE' })}
                        className='header__btn header__btn--next'>
                        Next
                     </button>
                  </div>
               </div>
            </header>
         </div>
      </>
   );
};
