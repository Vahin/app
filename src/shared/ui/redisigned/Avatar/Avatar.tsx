import { CSSProperties, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';
import { Appimage } from '../../redisigned/Appimage';
import { Icon } from '../Icon';
import UserAvatar from './assets/avatar.svg';
import { Skeleton } from '../../deprecated/Skeleton';

interface AvatarProps {
  className?: string;
  src?: string;
  alt?: string;
  size?: number;
}

export const Avatar = (props: AvatarProps) => {
  const { className, src, alt, size = 100 } = props;

  const styles: CSSProperties = useMemo(
    () => ({
      width: size,
      height: size,
    }),
    [size],
  );

  const fallback = <Skeleton width={size} height={size} border='50%' />;
  const errorFallback = <Icon width={size} height={size} Svg={UserAvatar} />;

  return (
    <div className={classNames(cls.Avatar, {}, [className])} style={styles}>
      <Appimage
        fallback={fallback}
        errorFallback={errorFallback}
        src={src}
        alt={alt}
        className={cls.img}
      />
    </div>
  );
};
