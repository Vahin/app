import { useCallback, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
  ProfileCard,
  ValidateProfileError,
  fetchProfileData,
  getProfileError,
  getProfileForm,
  getProfileIsLoading,
  getProfileReadOnly,
  getValidateProfileErrors,
  profileActions,
  profileReducer,
} from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { CurrencyType } from 'entities/Currency';
import { CountryType } from 'entities/Country';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { useParams } from 'react-router-dom';
import { Page } from 'shared/ui/Page/Page';
import { ProfilePageHeader } from '../ProfilePageHeader/ProfilePageHeader';
import cls from './ProfilePage.module.scss';

// TODO Вынести редактирование профиля в отдельную фичу editableProfile
// TODO Выявить поведение страницы при отсутствии или некорректном id

const reducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage = () => {
  const { t } = useTranslation('profile');
  const dispatch = useAppDispatch();
  const formData = useSelector(getProfileForm);
  const error = useSelector(getProfileError);
  const isLoading = useSelector(getProfileIsLoading);
  const readonly = useSelector(getProfileReadOnly);
  const validateErrors = useSelector(getValidateProfileErrors);
  const { id } = useParams<{ id: string}>();

  useEffect(() => {
    if (__PROJECT__ !== 'storybook' && id) {
      dispatch(fetchProfileData(id));
    }
  }, [dispatch, id]);

  const validateErrorTranslates = {
    [ValidateProfileError.INCORRECT_AGE]: t('Введите правильный возраст'),
    [ValidateProfileError.INCORRECT_COUNTRY]: t('Некорректно указана страна'),
    [ValidateProfileError.INCORRECT_USER_DATA]: t('Имя и Фамилия обязательны'),
    [ValidateProfileError.NO_DATA]: t('Заполните форму'),
    [ValidateProfileError.SERVER_ERROR]: t('Ошибка при сохранении на сервере'),
  };

  const onChangeFirstname = useCallback((value: string) => {
    dispatch(profileActions.updateProfile({ firstname: value }));
  }, [dispatch]);

  const onChangeLastname = useCallback((value: string) => {
    dispatch(profileActions.updateProfile({ lastname: value }));
  }, [dispatch]);

  const onChangeAge = useCallback((value: string) => {
    dispatch(profileActions.updateProfile({ age: Number(value) }));
  }, [dispatch]);

  const onChangeCity = useCallback((value: string) => {
    dispatch(profileActions.updateProfile({ city: value }));
  }, [dispatch]);

  const onChangeUsername = useCallback((value: string) => {
    dispatch(profileActions.updateProfile({ username: value }));
  }, [dispatch]);

  const onChangeAvatar = useCallback((value: string) => {
    dispatch(profileActions.updateProfile({ avatar: value }));
  }, [dispatch]);

  const onChangeCurrency = useCallback((value: CurrencyType) => {
    dispatch(profileActions.updateProfile({ currency: value }));
  }, [dispatch]);

  const onChangeCountry = useCallback((value: CountryType) => {
    dispatch(profileActions.updateProfile({ country: value }));
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <Page className={classNames(cls.ProfilePage, {}, [])}>
        <ProfilePageHeader />
        {validateErrors && validateErrors.map((error) => (
          <Text text={validateErrorTranslates[error]} theme={TextTheme.ERROR} key={error} />
        ))}
        <ProfileCard
          data={formData}
          isLoading={isLoading}
          error={error}
          readonly={readonly}
          onChangeFirstname={onChangeFirstname}
          onChangeLastname={onChangeLastname}
          onChangeAge={onChangeAge}
          onChangeCity={onChangeCity}
          onChangeUsername={onChangeUsername}
          onChangeAvatar={onChangeAvatar}
          onChangeCurrency={onChangeCurrency}
          onChangeCountry={onChangeCountry}
        />
      </Page>
    </DynamicModuleLoader>

  );
};

export default ProfilePage;
