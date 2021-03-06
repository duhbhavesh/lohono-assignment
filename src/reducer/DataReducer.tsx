import { NewsArticles } from '../context/DataContext.types';
import { ActionType } from './DataReducer.types';

export const DataReducer = (
   state: NewsArticles,
   action: ActionType,
): NewsArticles => {
   switch (action.type) {
      case 'SET_ARTICLES':
         return {
            ...state,
            articles: action.payload,
         };

      case 'NEXT_PAGE':
         const nextPage = state.page + 1;
         return {
            ...state,
            page: nextPage,
         };

      case 'PREV_PAGE':
         const prevPage = state.page - 1;
         return {
            ...state,
            page: prevPage,
         };

      case 'SEARCH':
         return {
            ...state,
            search: action.payload,
         };

      default:
         return state;
   }
};
