import { createSelector } from '@reduxjs/toolkit';
import { getUserRoles } from '../getUserRoles/getUserRoles';
import { UserRole } from '../../types/user';

export const getIsUserAdmin = createSelector(getUserRoles, (roles) =>
  Boolean(roles?.includes(UserRole.ADMIN)),
);
