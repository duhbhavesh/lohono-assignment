import { FC, MouseEventHandler } from 'react';
import './ContextMenuButton.css';

type ContextMenuButtonProp = {
   func: MouseEventHandler;
   text: string;
};

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
