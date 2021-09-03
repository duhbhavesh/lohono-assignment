import { FC } from 'react';
import { PageButtonProp } from './PageButton.types';
import './PageButton.css';

export const PageButton: FC<PageButtonProp> = ({
   text,
   page,
   func,
}: PageButtonProp) => {
   return (
      <>
         <button disabled={page} onClick={func} className='header__btn '>
            {text}
         </button>
      </>
   );
};
