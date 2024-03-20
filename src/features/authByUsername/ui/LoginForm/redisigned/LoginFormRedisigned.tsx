import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { LoginFormProps } from '../../../types/LoginFormProps';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { loginReducer } from '../../../testing';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getLoginUsername } from '../../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginError } from '../../../model/selectors/getLoginError/getLoginError';
import { getLoginIsLoading } from '../../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { loginActions } from '../../../model/slice/loginSlice';
import { loginByUsername } from '../../../model/services/loginByUsername/loginByUsername';
import { Text } from '@/shared/ui/redisigned/Text';
import { Input } from '@/shared/ui/redisigned/Input';
import { Button } from '@/shared/ui/redisigned/Button';
import { HStack, VStack } from '@/shared/ui/redisigned/Stack';

const initialReducers: ReducersList = {
  loginForm: loginReducer,
};

export const LoginFormRedisigned = memo((props: LoginFormProps) => {
  const { className, onSuccess } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const error = useSelector(getLoginError);
  const isLoading = useSelector(getLoginIsLoading);

  const onUsernameChange = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch],
  );

  const onPasswordChange = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch],
  );

  const onLoginClick = useCallback(async () => {
    const result = await dispatch(loginByUsername({ username, password }));
    if (result.meta.requestStatus === 'fulfilled') {
      onSuccess?.();
    }
  }, [onSuccess, dispatch, username, password]);

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <VStack gap='16' max className={className}>
        <Text title={t('Авторизация')} />
        {error && (
          <HStack max justify='center'>
            <Text text={t('Ошибка')} variant='error' />
          </HStack>
        )}
        <Input
          type='text'
          placeholder={t('Логин')}
          autofocus
          onChange={onUsernameChange}
          value={username}
        />
        <Input
          type='text'
          placeholder={t('Пароль')}
          onChange={onPasswordChange}
          value={password}
        />
        <Button variant='outline' onClick={onLoginClick} disabled={isLoading}>
          {t('Войти')}
        </Button>
      </VStack>
    </DynamicModuleLoader>
  );
});
