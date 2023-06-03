import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

export const LoginForm: FC<LoginFormProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Input
        type="text"
        className={cls.input}
        placeholder={t('Логин')}
        autofocus
      />
      <Input
        type="text"
        className={cls.input}
        placeholder={t('Пароль')}
      />
      <Button
        className={cls.submitBtn}
        theme={ButtonTheme.BACKGROUND_INVERTED}
      >
        { t('Войти')}
      </Button>
    </div>
  );
};
