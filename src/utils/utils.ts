import { NewsArticle } from '../services/getNewArticles.types';

export function getfilterdData(arr: NewsArticle[], searchQuery: string) {
   return arr.filter((query) =>
      query.title.toLowerCase().includes(searchQuery.toLowerCase()),
   );
}
