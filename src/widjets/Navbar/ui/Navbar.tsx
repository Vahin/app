import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = (props) => {
  const { className } = props;

  const { t } = useTranslation();

  return (
    <nav className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.linkbox}>
        <AppLink to="/" theme={AppLinkTheme.INVERTED}>
          {t('Главная')}
        </AppLink>
        <AppLink to="/about" theme={AppLinkTheme.INVERTED}>
          {t('О сайте')}
        </AppLink>
      </div>
    </nav>
  );
};
