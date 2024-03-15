import { ReactNode } from 'react';
import { Mods, classNames } from '@/shared/lib/classNames/classNames';
import { useModal } from '@/shared/lib/hooks/useModal/useModal';
import cls from './Modal.module.scss';
import { Portal } from '../Portal/Portal';
import { Overlay } from '../Overlay/Overlay';
import { ToggleComponentFeatures } from '@/shared/lib/features';

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  lazy?: boolean;
  onClose?: () => void;
}
const ANIMATION_DELAY: number = 300;

export const Modal = (props: ModalProps) => {
  const { className, children, isOpen, lazy, onClose } = props;

  const { close, isClosing, isMounted } = useModal({
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
    <ToggleComponentFeatures
      feature='isAppRedisigned'
      on={
        <Portal element={document.getElementById('App') ?? document.body}>
          <div className={classNames(cls.ModalRedisigned, mods, [className])}>
            <Overlay onClick={close} />
            <div className={cls.content}>{children}</div>
          </div>
        </Portal>
      }
      off={
        <Portal element={document.getElementById('App') ?? document.body}>
          <div className={classNames(cls.Modal, mods, [className])}>
            <Overlay onClick={close} />
            <div className={cls.content}>{children}</div>
          </div>
        </Portal>
      }
    />
  );
};
