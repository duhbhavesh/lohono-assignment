import { FC, useEffect } from 'react';
import { ArticleCard } from '../../components/ArticleCard/ArticleCard';
import { NoResultFound } from '../../components/NoResultFound/NoResultFound';
import { useData } from '../../context/DataContext';
import getNewArticles from '../../services/getNewArticles';
import { getfilterdData } from '../../utils/utils';
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
