import { classNames } from 'shared/lib/classNames/classNames';
import { CSSProperties, useMemo } from 'react';
import cls from './Avatar.module.scss';

interface AvatarProps {
  className?: string;
  src?: string
  alt?: string
  size?: number
}

export const Avatar = (props: AvatarProps) => {
  const {
    className,
    src,
    alt,
    size = 100,
  } = props;

  const styles: CSSProperties = useMemo(() => ({
    width: size,
    height: size,
  }), [size]);

  return (
    <div className={classNames(cls.Avatar, {}, [className])} style={styles}>
      <img src={src} alt={alt} className={cls.img} />
    </div>
  );
};
