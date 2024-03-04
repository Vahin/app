import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {
  AppLink as AppLinkDeprecated,
  AppLinkTheme,
} from '@/shared/ui/deprecated/AppLink';
import { classNames } from '@/shared/lib/classNames/classNames';
import { getUserAuthData } from '@/entities/User';
import clsDeprecated from './NavbarItemDeprecated.module.scss';
import cls from './NavbarItem.module.scss';
import { NavbarItemType } from '../../model/types/navbar';
import { ToggleComponentFeatures } from '@/shared/lib/features';
import { AppLink } from '@/shared/ui/redisigned/AppLink';
import { Icon } from '@/shared/ui/redisigned/Icon';

interface NavbarItemProps {
  item: NavbarItemType;
  collapsed: boolean;
}

export const NavbarItem = memo((props: NavbarItemProps) => {
  const { item, collapsed } = props;
  const { t } = useTranslation();
  const isAuth = useSelector(getUserAuthData);

  const mods: Record<string, boolean> = {
    [clsDeprecated.collapsed]: collapsed,
    [cls.collapsed]: collapsed,
  };

  if (item.authOnly && !isAuth) {
    return null;
  }

  return (
    <ToggleComponentFeatures
      feature='isAppRedisigned'
      on={
        <div className={cls.item}>
          <AppLink
            to={item.path}
            variant='primary'
            className={classNames(cls.link, mods)}
            activeClassName={cls.active}
          >
            <Icon Svg={item.Icon} />
            <span className={classNames(cls.linkText, mods)}>
              {t(item.text)}
            </span>
          </AppLink>
        </div>
      }
      off={
        <AppLinkDeprecated
          to={item.path}
          theme={AppLinkTheme.INVERTED}
          className={classNames(clsDeprecated.link, mods)}
        >
          <item.Icon className={clsDeprecated.icon} />
          <span className={clsDeprecated.linkText}>{t(item.text)}</span>
        </AppLinkDeprecated>
      }
    />
  );
});
