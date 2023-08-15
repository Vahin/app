import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from '../Button/Button';
import CopyIcon from '../../assets/icons/squared.svg';
import { Icon } from '../Icon/Icon';
import cls from './Code.module.scss';

interface CodeProps {
  className?: string;
  text: string
}

export const Code = memo((props: CodeProps) => {
  const { className, text } = props;

  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <pre className={classNames(cls.Code, {}, [className])}>
      <Button onClick={onCopy} className={cls.copyBtn} size={ButtonSize.S} theme={ButtonTheme.CLEAR}>
        <Icon Svg={CopyIcon} strokeVariant="primary" fillVariant="none" />
      </Button>
      <code>{text}</code>
    </pre>
  );
});
