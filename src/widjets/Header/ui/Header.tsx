import {
  memo, useCallback, useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { LoginModal } from '@/features/authByUsername';
import { getUserAuthData } from '@/entities/User';
import { Text, TextTheme } from '@/shared/ui/Text/Text';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink/AppLink';
import { RoutePath } from '@/app/providers/router/config/RoutePath';
import { HStack } from '@/shared/ui/Stack';
import { NotificationButton } from '@/features/notificationButton';
import { AvatarDropdown } from '@/features/avatarDropdown';
import cls from './Header.module.scss';

interface HeaderProps {
  className?: string;
}

export const Header = memo((props: HeaderProps) => {
  const { className } = props;
  const { t } = useTranslation();

  const authData = useSelector(getUserAuthData);

  const [isOpenAuthModal, setIsOpenAuthModal] = useState(false);

  const onCloseModal = useCallback(() => {
    setIsOpenAuthModal(false);
  }, [setIsOpenAuthModal]);

  const onShowModal = useCallback(() => {
    setIsOpenAuthModal(true);
  }, [setIsOpenAuthModal]);

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
          <HStack
            gap="16"
            className={cls.actions}
          >
            <NotificationButton />
            <AvatarDropdown authData={authData} />
          </HStack>
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
