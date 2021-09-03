import { useState } from 'react';
import { ContextMenuButton } from '../../../components';
import './ContextMenu.css';

export const ContextMenu = ({ article }: any) => {
   const [contextMenu, setContextMenu] = useState<boolean>(false);

   const handleContextMenu = () => {
      setContextMenu(() => !contextMenu);
   };

   const handleContextMenuBtn = (id: number, action: string) => {
      alert(`id: ${id}, action: ${action}`);
      setContextMenu(false);
   };

   return (
      <>
         <div className='article__context__menu'>
            <div
               className={contextMenu ? 'article__context--btns show' : 'hide'}>
               <ContextMenuButton
                  func={() => handleContextMenuBtn(article.id, 'Edit')}
                  text={'Edit'}
               />
               <ContextMenuButton
                  func={() => handleContextMenuBtn(article.id, 'Delete')}
                  text={'Delete'}
               />
            </div>
            <span
               onClick={handleContextMenu}
               className='article__context__menu--dots'>
               &#8942;
            </span>
         </div>
      </>
   );
};
