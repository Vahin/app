import { ReactNode, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Popover as HPopover } from '@headlessui/react';
import { DropdownDirection } from 'shared/types/ui/ui';
import { mapDirectionClass } from '../../styles/consts';
import cls from './Popover.module.scss';
import popupCls from '../../styles/popup.module.scss';

interface PopoverProps {
  className?: string;
  trigger: ReactNode
  direction?: DropdownDirection
  children: ReactNode
}

export const Popover = memo((props: PopoverProps) => {
  const {
    className,
    trigger,
    direction = 'bottom right',
    children,
  } = props;

  return (
    <HPopover className={classNames(cls.Popover, {}, [className, popupCls.popup])}>
      <HPopover.Button
        className={popupCls.trigger}
      >
        {trigger}

      </HPopover.Button>

      <HPopover.Panel
        className={classNames(cls.panel, {}, [mapDirectionClass[direction]])}
      >
        {children}
      </HPopover.Panel>
    </HPopover>
  );
});
