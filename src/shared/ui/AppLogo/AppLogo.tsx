import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AppLogo.module.scss';
import { HStack } from '../Stack';
import AppSvg from '../../assets/icons/logo.svg';

interface AppLogoProps {
  className?: string;
}

export const AppLogo = memo((props: AppLogoProps) => {
  const { className } = props;

  return (
    <HStack
      max
      justify='center'
      align='center'
      className={classNames(cls.appLogoWrapper, {}, [className])}
    >
      <AppSvg className={cls.appLogo} />
    </HStack>
  );
});
