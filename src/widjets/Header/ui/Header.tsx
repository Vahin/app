import { FC, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './Header.module.scss';

interface HeaderProps {
  className?: string;
}

export const Header: FC<HeaderProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation();

  const [isOpenAuthModal, setIsOpenAuthModal] = useState(false);

  const onToggleModal = useCallback(() => {
    setIsOpenAuthModal((prev) => !prev);
  }, [setIsOpenAuthModal]);

  return (
    <div className={classNames(cls.Header, {}, [className])}>
      <Button onClick={onToggleModal} theme={ButtonTheme.CLEAR}>
        {t('Войти')}
      </Button>
      <Modal isOpen={isOpenAuthModal} onClose={onToggleModal}>
        {t('ew')}
      </Modal>
    </div>
  );
};
