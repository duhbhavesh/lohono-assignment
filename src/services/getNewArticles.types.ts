export type NewsArticle = {
   id: number;
   thumbnail: string;
   title: string;
   description: string;
};

export type NewsArticles = {
   articles: NewsArticle[];
   page: number;
   search: string;
};

export type NewsData = NewsArticle[];
