import { RouteProps } from 'react-router-dom';
// TODO: Решить куда определить данный тип
// eslint-disable-next-line fsd-vakhr/layers-imports
import { UserRole } from '@/entities/User';

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean;
  roles?: UserRole[];
};
