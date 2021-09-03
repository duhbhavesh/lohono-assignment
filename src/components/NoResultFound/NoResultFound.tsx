import { FC } from 'react';
import './NoResultFound.css';

export const NoResultFound: FC = () => {
   return (
      <>
         <div className='no__result'>
            <div className='no__result--title'>No result found :(</div>
         </div>
      </>
   );
};
