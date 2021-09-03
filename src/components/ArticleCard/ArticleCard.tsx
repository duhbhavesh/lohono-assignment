import { ContextMenu } from '../../components';
import { ArticleProp } from './ArticleCard.types';
import './ArticleCard.css';

export const ArticleCard = ({ article }: ArticleProp) => {
   return (
      <>
         <div className='article__card'>
            <img className='article__img' src={article.thumbnail} alt='' />
            <div className='article__details'>
               <h3 className='article__title'>{article.title}</h3>
               <ContextMenu article={article} />
            </div>
            <div className='article__desc'>{article.description}</div>
         </div>
      </>
   );
};
