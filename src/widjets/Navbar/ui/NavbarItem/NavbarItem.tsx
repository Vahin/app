import { memo } from 'react';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './NavbarItem.module.scss';
import { NavbarItemType } from '../../model/items';

interface NavbarItemProps {
  item?: NavbarItemType;
  collapsed: boolean
}

export const NavbarItem = memo((props: NavbarItemProps) => {
  const { item, collapsed } = props;
  const { t } = useTranslation();

  const mods: Record<string, boolean> = {
    [cls.collapsed]: collapsed,
  };

  return (
    <AppLink
      to={item.path}
      theme={AppLinkTheme.INVERTED}
      className={classNames(cls.link, mods)}
    >
      <item.Icon className={cls.icon} />
      <span className={cls.linkText}>
        {t(item.text)}
      </span>
    </AppLink>
  );
});
