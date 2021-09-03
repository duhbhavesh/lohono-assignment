import { FC } from 'react';
import './ContextMenuButton.css';
import { ContextMenuButtonProp } from './ContextMenuButton.types';

export const ContextMenuButton: FC<ContextMenuButtonProp> = ({
   func,
   text,
}: ContextMenuButtonProp) => {
   return (
      <>
         <button onClick={func} className='article__context--btn'>
            {text}
         </button>
      </>
   );
};
