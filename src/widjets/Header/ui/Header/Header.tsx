import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Header.module.scss';
import { getUserAuthData } from '@/entities/User';
import { HStack } from '@/shared/ui/redisigned/Stack';
import { NotificationButton } from '@/features/notificationButton';
import { AvatarDropdown } from '@/features/avatarDropdown';

import { LoginModal } from '@/features/authByUsername';
import { Button } from '@/shared/ui/redisigned/Button';

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
      {authData ? (
        <HStack gap='16' className={cls.actions} align='center'>
          <NotificationButton />
          <AvatarDropdown authData={authData} />
        </HStack>
      ) : (
        <Button onClick={onShowModal} variant='clear' className={cls.btn}>
          {t('Войти')}
        </Button>
      )}
      {isOpenAuthModal && (
        <LoginModal isOpen={isOpenAuthModal} onClose={onCloseModal} />
      )}
    </header>
  );
});
