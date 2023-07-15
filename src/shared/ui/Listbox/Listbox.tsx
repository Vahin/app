import { Fragment, ReactNode, useState } from 'react';
import { Listbox as HListbox } from '@headlessui/react';
import { Mods, classNames } from 'shared/lib/classNames/classNames';
import cls from './Listbox.module.scss';
import { Button, ButtonSize } from '../Button/Button';

export interface ListboxItem {
  value: string
  content: ReactNode
}

type DropdownDirection = 'top' | 'bottom'

export interface ListboxProps {
  items: ListboxItem[]
  className?: string
  value?: string
  defaultValue?: string
  onChange: (value: string) => void
  readonly?: boolean
  direction?: DropdownDirection
}

export const Listbox = (props: ListboxProps) => {
  const {
    className,
    items,
    value,
    defaultValue,
    onChange,
    readonly,
    direction = 'bottom',
  } = props;

  return (
    <HListbox
      as="div"
      className={classNames(cls.listbox, {
        [cls.disabled]: readonly,
      }, [className])}
      value={value}
      onChange={onChange}
      disabled={readonly}
    >
      <HListbox.Button className={cls.trigger}>
        <Button size={ButtonSize.S} disabled={readonly}>
          {value || defaultValue}
        </Button>
      </HListbox.Button>
      <HListbox.Options className={classNames(cls.options, {}, [cls[direction]])}>
        {items.map((item) => (
          <HListbox.Option
            key={item.value}
            value={item.value}
            as={Fragment}
          >
            {({ active, selected }) => (
              <li
                className={classNames(cls.item, {
                  [cls.active]: active,
                  [cls.selected]: selected,
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
