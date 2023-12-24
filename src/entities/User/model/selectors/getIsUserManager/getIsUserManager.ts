import { createSelector } from '@reduxjs/toolkit';
import { getUserRoles } from '../getUserRoles/getUserRoles';
import { UserRole } from '../../types/user';

export const getIsUserManager = createSelector(getUserRoles, (roles) => Boolean(roles?.includes(UserRole.MANAGER)));
