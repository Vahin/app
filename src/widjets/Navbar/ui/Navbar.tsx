import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import HomeIcon from 'shared/assets/icons/home.svg';
import AboutIcon from 'shared/assets/icons/list.svg';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
  collapsed?: boolean;
}

export const Navbar: FC<NavbarProps> = (props) => {
  const { className, collapsed = false } = props;

  const mods = {
    [cls.collapsed]: collapsed,
  };

  const { t } = useTranslation();

  return (
    <nav className={classNames(cls.Navbar, {}, [className])}>
      <AppLink
        to={RoutePath.main}
        theme={AppLinkTheme.INVERTED}
        className={classNames(cls.link, mods)}
      >
        <HomeIcon className={cls.icon} />
        <span className={cls.linkText}>
          {t('Главная')}
        </span>
      </AppLink>
      <AppLink
        to={RoutePath.about}
        theme={AppLinkTheme.INVERTED}
        className={classNames(cls.link, mods)}
      >
        <AboutIcon className={cls.icon} />
        <span className={cls.linkText}>
          {t('О сайте')}
        </span>
      </AppLink>
    </nav>
  );
};
