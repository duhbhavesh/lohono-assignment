import { useState } from 'react';
import { NewsArticle } from '../../services/getNewArticles.types';
import './ArticleCard.css';

type ArticleProp = {
   article: NewsArticle;
};

export const ArticleCard = ({ article }: ArticleProp) => {
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
         <div className='article__card'>
            <img className='article__img' src={article.thumbnail} alt='' />
            <div className='article__details'>
               <h3 className='article__title'>{article.title}</h3>
               <div className='article__context__menu'>
                  <ul
                     className={
                        contextMenu ? 'article__context--items show' : 'hide'
                     }>
                     <li
                        onClick={() => handleContextMenuBtn(article.id, 'Edit')}
                        className='article__context--item'>
                        Edit
                     </li>
                     <li
                        onClick={() =>
                           handleContextMenuBtn(article.id, 'Delete')
                        }
                        className='article__context--item'>
                        Delete
                     </li>
                  </ul>
                  <span
                     onClick={handleContextMenu}
                     className='article__context__menu--dots'>
                     &#8942;
                  </span>
               </div>
            </div>
            <div className='article__desc'>{article.description}</div>
         </div>
      </>
   );
};
