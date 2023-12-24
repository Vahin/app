import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Dropdown } from '@/shared/ui/Popups';
import {
  User, getIsUserAdmin, getIsUserManager, userActions,
} from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Avatar } from '@/shared/ui/Avatar';
import cls from './AvatarDropdown.module.scss';
import { getRouteAdminPanel, getRouteProfile } from '@/shared/const/router';

interface AvatarDropdownProps {
  className?: string;
  authData: User
}

export const AvatarDropdown = memo((props: AvatarDropdownProps) => {
  const { className, authData } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const isAdmin = useSelector(getIsUserAdmin);
  const isManager = useSelector(getIsUserManager);

  const isAdminPanelAvalible = isAdmin || isManager;

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  return (
    <div className={classNames(cls.AvatarDropdown, {}, [className])}>
      <Dropdown
        items={[
          {
            content: t('Профиль'),
            href: getRouteProfile(authData.id),
          },
          ...(isAdminPanelAvalible ? [{
            content: t('Админка'),
            href: getRouteAdminPanel(),
          }] : []),
          {
            content: t('Выйти'),
            onClick: onLogout,
          },
        ]}
        trigger={(
          <Avatar
            src={authData.avatar}
            size={40}
            className={cls.avatar}
          />
              )}
        className={cls.box}
        direction="bottom left"
      />
    </div>
  );
});
