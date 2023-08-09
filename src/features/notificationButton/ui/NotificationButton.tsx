import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Popover } from 'shared/ui/Popups';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import { NotificationsList } from 'entities/Notification';
import cls from './NotificationButton.module.scss';
import Notify from '../assets/icons/Notify.svg';

interface NotificationButtonProps {
  className?: string;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
  const { className } = props;

  return (
    <Popover
      className={classNames('', {}, [className])}
      trigger={(
        <Button theme={ButtonTheme.CLEAR}>
          <Icon Svg={Notify} variant="primary-inverted" />
        </Button>
              )}
      direction="bottom left"
    >
      <NotificationsList className={cls.notifications} />
    </Popover>
  );
});
