import { NewsData } from '../services/getNewArticles.types';

export type ActionType =
   | { type: 'SET_ARTICLES'; payload: NewsData }
   | { type: 'NEXT_PAGE'; payload?: number }
   | { type: 'PREV_PAGE'; payload?: number };
