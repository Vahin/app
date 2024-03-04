import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
  Button as ButtonDeprecated,
  ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import cls from './LangSwitcher.module.scss';
import { ToggleComponentFeatures } from '@/shared/lib/features';
import { Button } from '@/shared/ui/redisigned/Button';

interface LangSwitcherProps {
  className?: string;
  short?: boolean;
}

export const LangSwitcher = memo((props: LangSwitcherProps) => {
  const { className, short } = props;
  const { t, i18n } = useTranslation();

  const translateButtonClickHandler = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <ToggleComponentFeatures
      feature='isAppRedisigned'
      on={
        <Button
          variant='clear'
          onClick={translateButtonClickHandler}
          className={classNames('', {}, [className])}
        >
          {t(short ? 'Короткий язык' : 'Язык')}
        </Button>
      }
      off={
        <ButtonDeprecated
          onClick={translateButtonClickHandler}
          className={classNames(cls.LangSwitcher, {}, [className])}
          theme={ButtonTheme.CLEAR}
        >
          {t(short ? 'Короткий язык' : 'Язык')}
        </ButtonDeprecated>
      }
    />
  );
});
