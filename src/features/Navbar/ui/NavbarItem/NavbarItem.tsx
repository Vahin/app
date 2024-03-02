import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { AppLink, AppLinkTheme } from '@/shared/ui/deprecated/AppLink';
import { classNames } from '@/shared/lib/classNames/classNames';
import { getUserAuthData } from '@/entities/User';
import cls from './NavbarItem.module.scss';
import { NavbarItemType } from '../../model/types/navbar';

interface NavbarItemProps {
  item: NavbarItemType;
  collapsed: boolean;
}

export const NavbarItem = memo((props: NavbarItemProps) => {
  const { item, collapsed } = props;
  const { t } = useTranslation();
  const isAuth = useSelector(getUserAuthData);

  const mods: Record<string, boolean> = {
    [cls.collapsed]: collapsed,
  };

  if (item.authOnly && !isAuth) {
    return null;
  }

  return (
    <AppLink
      to={item.path}
      theme={AppLinkTheme.INVERTED}
      className={classNames(cls.link, mods)}
    >
      <item.Icon className={cls.icon} />
      <span className={cls.linkText}>{t(item.text)}</span>
    </AppLink>
  );
});
