import { memo, ReactNode, useCallback, useEffect } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
  AnimationProvider,
  useAnimationLibs,
} from '@/shared/lib/components/AnimationProvider';
import { Overlay } from '../../redisigned/Overlay/Overlay';
import cls from './Drawer.module.scss';
import { Portal } from '../../redisigned/Portal/Portal';

interface DrawerProps {
  className?: string;
  children: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

const height = window.innerHeight - 100;

/**
 * Устарел, используем новый компоненты.
 * @deprecated
 */
export const DrawerContent = memo((props: DrawerProps) => {
  const { Spring, Gesture } = useAnimationLibs();
  const [{ y }, api] = Spring.useSpring(() => ({ y: height }));
  const { className, children, onClose, isOpen, lazy } = props;

  const openDrawer = useCallback(() => {
    api.start({ y: 0, immediate: false });
  }, [api]);

  useEffect(() => {
    if (isOpen) {
      openDrawer();
    }
  }, [api, isOpen, openDrawer]);

  const close = (velocity = 0) => {
    api.start({
      y: height,
      immediate: false,
      config: { ...Spring.config.stiff, velocity },
      onResolve: onClose,
    });
  };

  const bind = Gesture.useDrag(
    ({
      last,
      velocity: [, vy],
      direction: [, dy],
      movement: [, my],
      cancel,
    }) => {
      if (my < -70) cancel();

      if (last) {
        if (my > height * 0.5 || (vy > 0.5 && dy > 0)) {
          close();
        } else {
          openDrawer();
        }
      } else {
        api.start({ y: my, immediate: true });
      }
    },
    {
      from: () => [0, y.get()],
      filterTaps: true,
      bounds: { top: 0 },
      rubberband: true,
    },
  );

  if (!isOpen) {
    return null;
  }

  const display = y.to((py) => (py < height ? 'block' : 'none'));

  return (
    <Portal>
      <div className={classNames(cls.Drawer, {}, [className, 'app_drawer'])}>
        <Overlay onClick={() => close()} />
        <Spring.a.div
          className={cls.sheet}
          style={{ display, bottom: `calc(-100vh + ${height - 100}px)`, y }}
          {...bind()}
        >
          {children}
        </Spring.a.div>
      </div>
    </Portal>
  );
});

const DrawerAsync = (props: DrawerProps) => {
  const { isLoaded } = useAnimationLibs();

  if (!isLoaded) return null;

  return <DrawerContent {...props} />;
};

/**
 * Устарел, используем новый компоненты.
 * @deprecated
 */
export const Drawer = (props: DrawerProps) => (
  <AnimationProvider>
    <DrawerAsync {...props} />
  </AnimationProvider>
);
