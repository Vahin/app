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
import { AppRoutes, RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Dropdown } from 'shared/ui/Dropdown/Dropdown';
import { Avatar } from 'shared/ui/Avatar/Avatar';
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
          <Dropdown
            items={[
              {
                content: t('Выйти'),
                onClick: onLogout,
              },
              {
                content: t('Профиль'),
                href: `${RoutePath.profile}${authData.id}`,
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
