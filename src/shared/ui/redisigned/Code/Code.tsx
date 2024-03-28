import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import CopyIcon from '../../../assets/icons/copy.svg';
import { Icon } from '../Icon/Icon';
import cls from './Code.module.scss';

interface CodeProps {
  className?: string;
  'data-testid'?: string;
  text: string;
}

export const Code = memo((props: CodeProps) => {
  const { className, text, 'data-testid': dataTestid } = props;

  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <pre
      className={classNames(cls.Code, {}, [className])}
      data-testid={dataTestid || 'Code'}
    >
      <Icon
        Svg={CopyIcon}
        clickable
        onClick={onCopy}
        className={cls.copyBtn}
        data-testid={`${dataTestid ?? 'Code'}.CopyButton`}
      />
      <code>{text}</code>
    </pre>
  );
});
