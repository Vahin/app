import { User } from '@/entities/User';

export interface CommentType {
  id: string;
  text: string;
  user: User;
}
