import { CommentType } from '../model/types/comment';

export interface CommentListProps {
  className?: string;
  comments?: CommentType[];
  isLoading: boolean;
}
