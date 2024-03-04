import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AppLogo.module.scss';

import AppSvg from '../../../assets/icons/logo.svg';
import { HStack } from '../../deprecated/Stack';

interface AppLogoProps {
  className?: string;
  size?: number;
}

export const AppLogo = memo((props: AppLogoProps) => {
  const { className, size = 50 } = props;

  return (
    <HStack
      max
      justify='center'
      align='center'
      className={classNames(cls.appLogoWrapper, {}, [className])}
    >
      <div className={cls.svgBox} style={{ maxWidth: size, maxHeight: size }}>
        <AppSvg className={cls.appLogo} color='black' />
      </div>
    </HStack>
  );
});
