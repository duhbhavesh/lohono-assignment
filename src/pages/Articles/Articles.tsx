import { FC } from 'react';
import { ArticleCard } from '../../components/ArticleCard/ArticleCard';
import { useData } from '../../context/DataContext';
import './Articles.css';

export const Articles: FC = () => {
   const {
      state: { articles },
   } = useData();

   return (
      <>
         <div className='articles'>
            {articles.map((article) => {
               return <ArticleCard key={article.id} article={article} />;
            })}
         </div>
      </>
   );
};
