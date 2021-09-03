import { FC } from 'react';
import { useData } from '../../context/DataContext';
import { PageButton } from '../Buttons/PageButton/PageButton';
import { Search } from '../Search/Search';
import './Header.css';

export const Header: FC = () => {
   const {
      state: { page },
      dispatch,
   } = useData();

   const handleNextClick = () => {
      dispatch({ type: 'NEXT_PAGE' });
   };

   const handlePrevClick = () => {
      dispatch({ type: 'PREV_PAGE' });
   };

   return (
      <>
         <div className='container'>
            <header className='header'>
               <div className='header__logo'>News Articles</div>
               <div className='header__actions'>
                  <div className='header__search'>
                     <Search />
                  </div>
                  <div className='header__btns'>
                     <PageButton
                        text={'Prev'}
                        page={page <= 1}
                        func={handlePrevClick}
                     />
                     <PageButton
                        text={'Next'}
                        page={page >= 9}
                        func={handleNextClick}
                     />
                  </div>
               </div>
            </header>
         </div>
      </>
   );
};
