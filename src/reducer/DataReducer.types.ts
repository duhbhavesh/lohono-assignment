import { NewsData } from '../context/DataContext.types';

export type ActionType =
   | { type: 'SET_ARTICLES'; payload: NewsData }
   | { type: 'NEXT_PAGE'; payload?: number }
   | { type: 'PREV_PAGE'; payload?: number }
   | { type: 'SEARCH'; payload: string };
