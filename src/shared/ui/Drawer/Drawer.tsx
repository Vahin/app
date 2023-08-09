import { ReactNode, memo } from 'react';
import { Mods, classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useModal } from 'shared/lib/hooks/useModal/useModal';
import { Portal } from '../Portal/Portal';
import cls from './Drawer.module.scss';
import { Overlay } from '../Overlay/Overlay';

interface DrawerProps {
  className?: string
  children: ReactNode
  isOpen?: boolean
  lazy?: boolean
  onClose?: () => void
}

const ANIMATION_DELAY = 300;

export const Drawer = memo((props: DrawerProps) => {
  const { t } = useTranslation();
  const {
    className,
    children,
    isOpen,
    lazy,
    onClose,
  } = props;

  const {
    close,
    isClosing,
    isMounted,
  } = useModal({
    animationDelay: ANIMATION_DELAY,
    isOpen,
    onClose,
  });

  const mods: Mods = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing,
  };

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div className={classNames(cls.Drawer, mods, [className, 'app_drawer'])}>
        <Overlay onClick={close} />
        <div
          className={cls.content}
        >
          { children }
        </div>
      </div>
    </Portal>
  );
});
