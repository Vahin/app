import { Fragment, ReactNode, useMemo } from 'react';
import { Listbox as HListbox } from '@headlessui/react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui/ui';
import cls from './Listbox.module.scss';
import { Button } from '../../../Button/Button';
import { mapDirectionClass } from '../../styles/consts';
import popupCls from '../../styles/popup.module.scss';
import ArrowIcon from '@/shared/assets/icons/arrow-bottom.svg';
import { Icon } from '../../../Icon';

export interface ListboxItem<T extends string> {
  value: T;
  content: ReactNode;
}

export interface ListboxProps<T extends string> {
  items: ListboxItem<T>[];
  className?: string;
  value?: T;
  defaultValue?: T;
  readonly?: boolean;
  direction?: DropdownDirection;
  onChange: (value: T) => void;
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
      <HListbox.Button as='div'>
        <Button
          size='m'
          className={cls.trigger}
          disabled={readonly}
          variant='filled'
          padding='min'
          addonRight={<Icon Svg={ArrowIcon} />}
        >
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
