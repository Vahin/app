import { ReactNode, memo } from 'react';
import { Mods, classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Portal } from '../Portal/Portal';
import cls from './Drawer.module.scss';
import { Overlay } from '../Overlay/Overlay';

interface DrawerProps {
  className?: string
  children: ReactNode
  isOpen?: boolean
  onClose?: () => void
}

export const Drawer = memo((props: DrawerProps) => {
  const { t } = useTranslation();
  const {
    className,
    children,
    isOpen,
    onClose,
  } = props;

  const mods: Mods = {
    [cls.opened]: isOpen,
  };

  return (
    <Portal>
      <div className={classNames(cls.Drawer, mods, [className, 'app_drawer'])}>
        <Overlay onClick={onClose} />
        <div
          className={cls.content}
        >
          { children }
        </div>
      </div>
    </Portal>
  );
});
