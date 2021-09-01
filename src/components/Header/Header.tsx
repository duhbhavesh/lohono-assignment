import { FC } from 'react';
import './Header.css';

export const Header: FC = () => {
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
                     />
                  </div>
                  <div className='header__btns'>
                     <button className='header__btn header__btn--prev'>
                        Prev
                     </button>
                     <button className='header__btn header__btn--next'>
                        Next
                     </button>
                  </div>
               </div>
            </header>
         </div>
      </>
   );
};
