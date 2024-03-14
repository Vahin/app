import {
  ChangeEvent,
  InputHTMLAttributes,
  ReactNode,
  memo,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Mods, classNames } from '@/shared/lib/classNames/classNames';
import cls from './Input.module.scss';
import { HStack } from '../Stack';
import { Text } from '../Text';

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange' | 'readOnly'
>;

type PaddingProps = 'none' | 'standart';

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  label?: string;
  type?: string;
  autofocus?: boolean;
  readOnly?: boolean;
  addonLeft?: ReactNode;
  addonRight?: ReactNode;
  padding?: PaddingProps;
  paddingH?: PaddingProps;
  paddingV?: PaddingProps;
  onChange?: (value: string) => void;
}

const mapPaddingVtoClass: Record<PaddingProps, string> = {
  none: cls['paddingV-0'],
  standart: cls['paddingV-8'],
};

const mapPaddingHtoClass: Record<PaddingProps, string> = {
  none: cls['paddingH-0'],
  standart: cls['paddingH-16'],
};

export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    label,
    type = 'text',
    autofocus,
    readOnly = false,
    addonLeft,
    addonRight,
    padding,
    paddingH = 'standart',
    paddingV = 'standart',
    onChange,
    ...otherProps
  } = props;

  const ref = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    if (autofocus) {
      ref.current?.focus();
    }
  }, [autofocus]);

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value);
  };

  const onFocus = () => {
    setIsFocused(true);
  };

  const onBlur = () => {
    setIsFocused(false);
  };

  const mods: Mods = {
    [cls.readOnly]: readOnly,
    [cls.focused]: isFocused,
    [cls.withAddonLeft]: Boolean(addonLeft),
    [cls.withAddonRight]: Boolean(addonRight),
  };

  const paddingHClass = padding
    ? mapPaddingHtoClass[padding]
    : mapPaddingHtoClass[paddingH];
  const paddingVClass = padding
    ? mapPaddingVtoClass[padding]
    : mapPaddingVtoClass[paddingV];

  const additionalClasses = [className, paddingHClass, paddingVClass];

  const input = (
    <div className={classNames(cls.inputWrapper, mods, additionalClasses)}>
      {addonLeft && <div className={cls.addonLeft}>{addonLeft}</div>}
      <input
        ref={ref}
        className={cls.input}
        type={type}
        value={value}
        readOnly={readOnly}
        onChange={onChangeHandler}
        onFocus={onFocus}
        onBlur={onBlur}
        {...otherProps}
      />
      {addonRight && <div className={cls.addonRight}>{addonRight}</div>}
    </div>
  );

  if (!label) {
    return input;
  }

  return (
    <HStack gap='8' align='center' max>
      <Text text={label} divider noWrap />
      {input}
    </HStack>
  );
});
