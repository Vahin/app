import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { LoginModal } from '@/features/authByUsername';
import { getUserAuthData } from '@/entities/User';
import { Text, TextTheme } from '@/shared/ui/deprecated/Text';
import { AppLink, AppLinkTheme } from '@/shared/ui/deprecated/AppLink';
import { HStack } from '@/shared/ui/redisigned/Stack';
import { NotificationButton } from '@/features/notificationButton';
import { AvatarDropdown } from '@/features/avatarDropdown';
import cls from './Header.module.scss';
import { getRouteArticleCreate } from '@/shared/const/router';

interface HeaderProps {
  className?: string;
}

export const DeprecatedHeader = memo((props: HeaderProps) => {
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
      <Text title={t('APP')} className={cls.logo} theme={TextTheme.INVERTED} />
      <AppLink to={getRouteArticleCreate()} theme={AppLinkTheme.INVERTED}>
        {t('Новая статья')}
      </AppLink>
      {authData ? (
        <HStack gap='16' className={cls.actions}>
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
      )}
      {isOpenAuthModal && (
        <LoginModal isOpen={isOpenAuthModal} onClose={onCloseModal} />
      )}
    </header>
  );
});
