import { createSelector } from '@reduxjs/toolkit';
import { getArticleDetailsData } from '../getArticleDetailsData/getArticleDetailsData';

export const getArticleDetailsUserId = createSelector(
  getArticleDetailsData,
  (data) => data?.user.id,
);
