export type NewsArticle = {
   id: number;
   thumbnail: string;
   title: string;
   description: string;
};

export type NewsArticles = {
   articles: NewsArticle[];
   page: number;
};

export type NewsData = NewsArticle[];
