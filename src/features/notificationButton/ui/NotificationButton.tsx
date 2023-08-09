import { memo, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Popover } from 'shared/ui/Popups';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import { NotificationsList } from 'entities/Notification';
import { Drawer } from 'shared/ui/Drawer/Drawer';
import { BrowserView, MobileView } from 'react-device-detect';
import { useDeviceDetect } from 'shared/lib/hooks/useDeviceDetect/useDeviceDetect';
import cls from './NotificationButton.module.scss';
import Notify from '../assets/icons/Notify.svg';

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
    <Button theme={ButtonTheme.CLEAR} onClick={onOpenDrawer}>
      <Icon Svg={Notify} variant="primary-inverted" />
    </Button>
  );

  return isMobile ? (
    <>
      {trigger}
      <Drawer isOpen={drawerIsOpen} onClose={onCloseDrawer}>
        <NotificationsList />
      </Drawer>
    </>
  ) : (
    <Popover
      className={classNames('', {}, [className])}
      trigger={trigger}
      direction="bottom left"
    >
      <NotificationsList className={cls.notifications} />
    </Popover>
  );
});
