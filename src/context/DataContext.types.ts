import React from 'react';
import { NewsArticles } from '../services/getNewArticles.types';

export type DataContextType = {
   state: NewsArticles;
   dispatch: React.Dispatch<any>;
};
