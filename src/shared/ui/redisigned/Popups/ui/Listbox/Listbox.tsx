import { Fragment, ReactNode, useMemo } from 'react';
import { Listbox as HListbox } from '@headlessui/react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui/ui';
import cls from './Listbox.module.scss';
import { Button } from '../../../Button/Button';
import { mapDirectionClass } from '../../styles/consts';
import popupCls from '../../styles/popup.module.scss';

export interface ListboxItem<T extends string> {
  value: T;
  content: ReactNode;
}

export interface ListboxProps<T extends string> {
  items: ListboxItem<T>[];
  className?: string;
  value?: T;
  defaultValue?: T;
  onChange: (value: T) => void;
  readonly?: boolean;
  direction?: DropdownDirection;
}

export const Listbox = <T extends string>(props: ListboxProps<T>) => {
  const {
    className,
    items,
    value,
    defaultValue,
    onChange,
    readonly,
    direction = 'bottom right',
  } = props;

  const selectedItem = useMemo(
    () => items.find((item) => item.value === value),
    [items, value],
  );

  return (
    <HListbox
      as='div'
      className={classNames(
        cls.listbox,
        {
          [cls.disabled]: readonly,
        },
        [className, popupCls.popup],
      )}
      value={value}
      onChange={onChange}
      disabled={readonly}
    >
      <HListbox.Button as='div' className={cls.trigger}>
        <Button size='m' disabled={readonly} variant='filled'>
          {selectedItem?.content || defaultValue}
        </Button>
      </HListbox.Button>
      <HListbox.Options
        className={classNames(cls.options, {}, [mapDirectionClass[direction]])}
      >
        {items.map((item) => (
          <HListbox.Option key={item.value} value={item.value} as={Fragment}>
            {({ active, selected }) => (
              <li
                className={classNames(cls.item, {
                  [popupCls.active]: active,
                  [popupCls.selected]: selected,
                })}
              >
                {item.content}
              </li>
            )}
          </HListbox.Option>
        ))}
      </HListbox.Options>
    </HListbox>
  );
};
