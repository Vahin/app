import { EntityState } from '@reduxjs/toolkit';
import { CommentType } from '@/entities/Comment';

export interface ArticleDetailsCommentsSchema extends EntityState<CommentType> {
  isLoading?: boolean;
  error?: string;
}
