import { memo, useCallback, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { getUserAuthData } from 'entities/User';
import { loginActions } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';

interface LoginFormProps {
  className?: string;
  onSuccessful?: () => void
}

export const LoginForm = memo((props: LoginFormProps) => {
  const { className, onSuccessful } = props;
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const {
    username, password, error, isLoading,
  } = useSelector(getLoginState);
  const authData = useSelector(getUserAuthData);

  const onUsernameChange = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value));
  }, [dispatch]);

  const onPasswordChange = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, username, password]);

  useEffect(() => {
    if (authData) {
      onSuccessful();
    }
  }, [authData, onSuccessful]);

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Text title={t('Авторизация')} />
      {
        error && <Text text={t('Вы ввели неверный логин или пароль')} theme={TextTheme.ERROR} />
      }
      <Input
        type="text"
        className={cls.input}
        placeholder={t('Логин')}
        autofocus
        onChange={onUsernameChange}
        value={username}
      />
      <Input
        type="text"
        className={cls.input}
        placeholder={t('Пароль')}
        onChange={onPasswordChange}
        value={password}
      />
      <Button
        className={cls.submitBtn}
        theme={ButtonTheme.OUTLINE}
        onClick={onLoginClick}
        disabled={isLoading}
      >
        { t('Войти')}
      </Button>
    </div>
  );
});
