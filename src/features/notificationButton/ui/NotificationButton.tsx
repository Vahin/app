import { memo, useCallback, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Popover as PopoverDeprecated } from '@/shared/ui/deprecated/Popups';
import {
  Button as ButtonDeprecated,
  ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import { NotificationsList } from '@/entities/Notification';
import { Drawer } from '@/shared/ui/deprecated/Drawer';
import { useDeviceDetect } from '@/shared/lib/hooks/useDeviceDetect/useDeviceDetect';
import cls from './NotificationButton.module.scss';
import NotifyDeprecated from '../assets/icons/Notify.svg';
import Notify from '@/shared/assets/icons/notify.svg';
import { ToggleComponentFeatures } from '@/shared/lib/features';
import { Icon } from '@/shared/ui/redisigned/Icon';
import { Popover } from '@/shared/ui/redisigned/Popups';

interface NotificationButtonProps {
  className?: string;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
  const { className } = props;
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const isMobile = useDeviceDetect();

  const onOpenDrawer = useCallback(() => {
    setDrawerIsOpen(true);
  }, [setDrawerIsOpen]);

  const onCloseDrawer = useCallback(() => {
    setDrawerIsOpen(false);
  }, [setDrawerIsOpen]);

  const trigger = (
    <ToggleComponentFeatures
      feature='isAppRedisigned'
      on={<Icon Svg={Notify} clickable onClick={onOpenDrawer} />}
      off={
        <ButtonDeprecated theme={ButtonTheme.CLEAR} onClick={onOpenDrawer}>
          <IconDeprecated
            Svg={NotifyDeprecated}
            fillVariant='primary-inverted'
          />
        </ButtonDeprecated>
      }
    />
  );

  return isMobile ? (
    <>
      {trigger}
      <Drawer isOpen={drawerIsOpen} onClose={onCloseDrawer}>
        <NotificationsList />
      </Drawer>
    </>
  ) : (
    <ToggleComponentFeatures
      feature='isAppRedisigned'
      on={
        <Popover
          className={classNames('', {}, [className])}
          trigger={trigger}
          direction='bottom left'
        >
          <NotificationsList className={cls.notifications} />
        </Popover>
      }
      off={
        <PopoverDeprecated
          className={classNames('', {}, [className])}
          trigger={trigger}
          direction='bottom left'
        >
          <NotificationsList className={cls.notifications} />
        </PopoverDeprecated>
      }
    />
  );
});
