import { FC, lazy } from 'react';
import { LoginFormProps } from '../../types/LoginFormProps';

export const LoginFormAsync = lazy<FC<LoginFormProps>>(
  () => import('./LoginForm'),
);
