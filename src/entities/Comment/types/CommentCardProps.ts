import { CommentType } from '../model/types/comment';

export interface CommentCardProps {
  className?: string;
  comment?: CommentType;
  isLoading: boolean;
}
