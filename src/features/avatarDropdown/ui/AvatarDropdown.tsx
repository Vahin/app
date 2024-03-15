import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Dropdown as DropdownRedisigned } from '@/shared/ui/deprecated/Popups';
import {
  User,
  getIsUserAdmin,
  getIsUserManager,
  userActions,
} from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import cls from './AvatarDropdown.module.scss';
import {
  getRouteAdminPanel,
  getRouteProfile,
  getRouteSettings,
} from '@/shared/const/router';
import { ToggleComponentFeatures } from '@/shared/lib/features';
import { Dropdown } from '@/shared/ui/redisigned/Popups';
import { Avatar } from '@/shared/ui/redisigned/Avatar';

interface AvatarDropdownProps {
  className?: string;
  authData: User;
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

  const items = useMemo(
    () => [
      {
        content: t('Профиль'),
        href: getRouteProfile(authData.id),
      },
      {
        content: t('Настройки'),
        href: getRouteSettings(),
      },
      ...(isAdminPanelAvalible
        ? [
            {
              content: t('Админка'),
              href: getRouteAdminPanel(),
            },
          ]
        : []),
      {
        content: t('Выйти'),
        onClick: onLogout,
      },
    ],
    [authData.id, isAdminPanelAvalible, onLogout, t],
  );

  return (
    <ToggleComponentFeatures
      feature='isAppRedisigned'
      on={
        <Dropdown
          items={items}
          trigger={
            <Avatar src={authData.avatar} size={40} className={cls.avatar} />
          }
          className={cls.box}
          direction='bottom left'
        />
      }
      off={
        <div className={classNames(cls.AvatarDropdown, {}, [className])}>
          <DropdownRedisigned
            items={items}
            trigger={
              <AvatarDeprecated
                src={authData.avatar}
                size={40}
                className={cls.avatar}
              />
            }
            className={cls.box}
            direction='bottom left'
          />
        </div>
      }
    />
  );
});
