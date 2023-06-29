import {
  memo, useCallback, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/authByUsername';
import { getUserAuthData, userActions } from 'entities/User';
import { useDispatch, useSelector } from 'react-redux';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import cls from './Header.module.scss';

interface HeaderProps {
  className?: string;
}

export const Header = memo((props: HeaderProps) => {
  const { className } = props;
  const { t } = useTranslation();

  const [isOpenAuthModal, setIsOpenAuthModal] = useState(false);
  const authData = useSelector(getUserAuthData);
  const dispatch = useDispatch();

  const onCloseModal = useCallback(() => {
    setIsOpenAuthModal(false);
  }, [setIsOpenAuthModal]);

  const onShowModal = useCallback(() => {
    setIsOpenAuthModal(true);
  }, [setIsOpenAuthModal]);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  return (
    <header className={classNames(cls.Header, {}, [className])}>
      <Text
        title={t('APP')}
        className={cls.logo}
        theme={TextTheme.INVERTED}
      />
      <AppLink
        to={RoutePath.article_create}
        theme={AppLinkTheme.INVERTED}
      >
        {t('Новая статья')}
      </AppLink>
      {
        authData ? (
          <Button
            onClick={onLogout}
            theme={ButtonTheme.CLEAR_INVERTED}
            className={cls.btn}
          >
            {t('Выйти')}
          </Button>
        ) : (
          <Button
            onClick={onShowModal}
            theme={ButtonTheme.CLEAR_INVERTED}
            className={cls.btn}
          >
            {t('Войти')}
          </Button>
        )
      }
      {isOpenAuthModal && (
      <LoginModal
        isOpen={isOpenAuthModal}
        onClose={onCloseModal}
      />
      )}

    </header>
  );
});
