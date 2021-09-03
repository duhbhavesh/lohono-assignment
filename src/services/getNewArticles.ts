import { NewsArticle } from './getNewArticles.types';

export const getNewArticles = async (page: number = 1, search?: string) => {
   let compiled: NewsArticle[] = Array.from({ length: 100 }, (_, offset) => {
      const article: NewsArticle = {
         id: offset,
         thumbnail: `https://picsum.photos/id/${offset}/1000/800`,
         title: `Title ${offset + 1}`,
         description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
      };
      return article;
   });
   if (search) {
      compiled = compiled.filter((each) => each.title.includes(search));
   }
   compiled = compiled.slice(page * 10, page * 10 + 10);
   return compiled;
};
