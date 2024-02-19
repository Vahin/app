import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ProfileCard } from '@/entities/Profile';
import { CurrencyType } from '@/entities/Currency';
import { CountryType } from '@/entities/Country';
import { Text, TextTheme } from '@/shared/ui/Text';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { ValidateProfileError } from '../../model/types/EditableProfileCardSchema';
import { getProfileForm } from '../../model/selectors/getProfileForm/getProfileForm';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileReadOnly } from '../../model/selectors/getProfileReadOnly/getProfileReadOnly';
import { getValidateProfileErrors } from '../../model/selectors/getValidateProfileErrors/getValidateProfileErrors';
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData';
import { profileActions, profileReducer } from '../../model/slice/profileSlice';
import { EditableProfileCardHeader } from '../EditableProfileCardHeader/EditableProfileCardHeader';

interface EditableProfileCardProps {
  className?: string;
  id: string;
}

const reducers: ReducersList = {
  profile: profileReducer,
};

export const EditableProfileCard = memo((props: EditableProfileCardProps) => {
  const { t } = useTranslation('profile');
  const { className, id } = props;
  const dispatch = useAppDispatch();
  const formData = useSelector(getProfileForm);
  const error = useSelector(getProfileError);
  const isLoading = useSelector(getProfileIsLoading);
  const readonly = useSelector(getProfileReadOnly);
  const validateErrors = useSelector(getValidateProfileErrors);

  useInitialEffect(() => {
    dispatch(fetchProfileData(id));
  }, [dispatch, id]);

  const validateErrorTranslates: Record<ValidateProfileError, string> = {
    [ValidateProfileError.INCORRECT_AGE]: t('Введите правильный возраст'),
    [ValidateProfileError.INCORRECT_COUNTRY]: t('Некорректно указана страна'),
    [ValidateProfileError.INCORRECT_USER_DATA]: t('Имя и Фамилия обязательны'),
    [ValidateProfileError.NO_DATA]: t('Заполните форму'),
    [ValidateProfileError.SERVER_ERROR]: t('Ошибка при сохранении на сервере'),
  };

  const onChangeFirstname = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfile({ firstname: value }));
    },
    [dispatch],
  );

  const onChangeLastname = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfile({ lastname: value }));
    },
    [dispatch],
  );

  const onChangeAge = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfile({ age: Number(value) }));
    },
    [dispatch],
  );

  const onChangeCity = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfile({ city: value }));
    },
    [dispatch],
  );

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfile({ username: value }));
    },
    [dispatch],
  );

  const onChangeAvatar = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfile({ avatar: value }));
    },
    [dispatch],
  );

  const onChangeCurrency = useCallback(
    (value: CurrencyType) => {
      dispatch(profileActions.updateProfile({ currency: value }));
    },
    [dispatch],
  );

  const onChangeCountry = useCallback(
    (value: CountryType) => {
      dispatch(profileActions.updateProfile({ country: value }));
    },
    [dispatch],
  );

  return (
    <DynamicModuleLoader reducers={reducers}>
      <>
        <EditableProfileCardHeader />
        {validateErrors &&
          validateErrors.map((error: ValidateProfileError) => (
            <Text
              text={validateErrorTranslates[error]}
              theme={TextTheme.ERROR}
              key={error}
              data-testid='EditableProfileCard.Error'
            />
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
      </>
    </DynamicModuleLoader>
  );
});
