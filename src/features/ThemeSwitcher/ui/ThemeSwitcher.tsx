import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { ThemeIcon as ThemeIconDeprecated } from '@/shared/ui/deprecated/ThemeIcon';
import cls from './ThemeSwitcher.module.scss';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { saveJsonSettings } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ToggleComponentFeatures } from '@/shared/lib/features';
import { Icon } from '@/shared/ui/redisigned/Icon';
import ThemeIcon from '@/shared/assets/icons/theme.svg';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = memo((props: ThemeSwitcherProps) => {
  const { className } = props;

  const { toggleTheme } = useTheme();
  const dispatch = useAppDispatch();

  const onToggleHandler = useCallback(() => {
    toggleTheme((newTheme) => {
      dispatch(saveJsonSettings({ theme: newTheme }));
    });
  }, [toggleTheme, dispatch]);

  return (
    <ToggleComponentFeatures
      feature='isAppRedisigned'
      on={<Icon Svg={ThemeIcon} clickable onClick={onToggleHandler} />}
      off={
        <Button
          theme={ButtonTheme.CLEAR}
          onClick={onToggleHandler}
          className={classNames(cls.ThemeSwitcher, {}, [className])}
        >
          <ThemeIconDeprecated className={cls.icon} />
        </Button>
      }
    />
  );
});
