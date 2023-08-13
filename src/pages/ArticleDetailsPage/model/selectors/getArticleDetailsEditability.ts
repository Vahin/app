import { createSelector } from '@reduxjs/toolkit';
import { getArticleDetailsUserId } from '@/entities/Article';
import { getUserAuthData } from '@/entities/User';

export const getArticleDetailsEditability = createSelector(
  getArticleDetailsUserId,
  getUserAuthData,
  (ownerId, authUser) => {
    if (!ownerId || !authUser) {
      return false;
    }

    return ownerId === authUser.id;
  },
);
