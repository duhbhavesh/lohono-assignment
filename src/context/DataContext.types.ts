import React from 'react';
import { NewsArticle } from '../services/getNewArticles.types';

export type DataContextType = {
   state: NewsArticles;
   dispatch: React.Dispatch<any>;
};

export type NewsArticles = {
   articles: NewsArticle[];
   page: number;
   search: string;
};

export type NewsData = NewsArticle[];
