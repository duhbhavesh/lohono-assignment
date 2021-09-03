import { FC, useEffect } from 'react';
import { useData } from '../../context';
import { ArticleCard } from '../../components';
import { NoResultFound } from '../../components';
import { getNewArticles } from '../../services';
import { getfilterdData } from '../../utils';
import './Articles.css';

export const Articles: FC = () => {
   const {
      state: { articles, page, search },
      dispatch,
   } = useData();

   useEffect(() => {
      try {
         getNewArticles(page, search).then((data) => {
            dispatch({ type: 'SET_ARTICLES', payload: data });
         });
      } catch {
         console.log('error');
      }
   }, [page]);

   const filteredData = getfilterdData(articles, search);

   return (
      <>
         <div className='articles'>
            {filteredData.length <= 0 ? (
               <NoResultFound />
            ) : (
               filteredData.map((article) => {
                  return <ArticleCard key={article.id} article={article} />;
               })
            )}
         </div>
      </>
   );
};
