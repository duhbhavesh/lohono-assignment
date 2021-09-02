import { NewsArticle } from '../../services/getNewArticles.types';
import './ArticleCard.css';

type ArticleProp = {
   article: NewsArticle;
};

export const ArticleCard = ({ article }: ArticleProp) => {
   return (
      <>
         <div className='article__card'>
            <img className='article__img' src={article.thumbnail} alt='' />
            <div className='article__details'>
               <h3 className='article__title'>{article.title}</h3>
               <div className='article__context__menu'>
                  <ul className='article__context--items'>
                     <li className='article__context--item'>Edit</li>
                     <li className='article__context--item'>Delete</li>
                  </ul>
                  <span className='article__context__menu--dots'>&#8942;</span>
               </div>
            </div>
            <div className='article__desc'>{article.description}</div>
         </div>
      </>
   );
};
