import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { CurrencySelect, CurrencyType } from 'entities/Currency';
import { CountrySelect, CountryType } from 'entities/Country';
import cls from './ProfileCard.module.scss';
import { Profile } from '../../model/types/profile';

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  isLoading?: boolean;
  error?: string;
  readonly?: boolean
  onChangeFirstname?: (value: string) => void
  onChangeLastname?: (value: string) => void
  onChangeCity?: (value: string) => void
  onChangeAge?: (value: string) => void
  onChangeAvatar?: (value: string) => void
  onChangeUsername?: (value: string) => void
  onChangeCurrency?: (currency: CurrencyType) => void
  onChangeCountry?: (country: CountryType) => void
}

export const ProfileCard = memo((props: ProfileCardProps) => {
  const {
    className, data,
    isLoading,
    error,
    readonly,
    onChangeFirstname,
    onChangeLastname,
    onChangeCity,
    onChangeAge,
    onChangeAvatar,
    onChangeUsername,
    onChangeCurrency,
    onChangeCountry,
  } = props;
  const { t } = useTranslation('profile');

  if (isLoading) {
    return (
      <div className={classNames(cls.ProfileCard, {}, [className, cls.loading])}>
        <Loader />
      </div>

    );
  }

  if (error) {
    return (
      <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
        <Text
          title={t('Ошибка при загрузке')}
          text={t('Попробуйте обновить страницу')}
          theme={TextTheme.ERROR}
          align="center"
        />
      </div>

    );
  }

  return (
    <div className={classNames(cls.ProfileCard, {}, [className])}>
      {
        data?.avatar && (
          <div className={cls.avatarWrapper}>
            <Avatar src={data?.avatar} alt={t('Аватар пользователя')} />
          </div>
        )
      }

      <Input
        value={data?.firstname}
        placeholder={t('Имя')}
        className={cls.input}
        onChange={onChangeFirstname}
        readOnly={readonly}
      />
      <Input
        value={data?.lastname}
        placeholder={t('Фамилия')}
        className={cls.input}
        onChange={onChangeLastname}
        readOnly={readonly}
      />
      <Input
        value={data?.age}
        placeholder={t('Возраст')}
        className={cls.input}
        onChange={onChangeAge}
        readOnly={readonly}
      />
      <Input
        value={data?.city}
        placeholder={t('Город')}
        className={cls.input}
        onChange={onChangeCity}
        readOnly={readonly}
      />
      <Input
        value={data?.username}
        placeholder={t('Псевдоним')}
        className={cls.input}
        onChange={onChangeUsername}
        readOnly={readonly}
      />
      <Input
        value={data?.avatar}
        placeholder={t('Ссылка на аватар')}
        className={cls.input}
        onChange={onChangeAvatar}
        readOnly={readonly}
      />
      <CurrencySelect
        value={data?.currency}
        onChange={onChangeCurrency}
        readonly={readonly}
      />
      <CountrySelect
        value={data?.country}
        onChange={onChangeCountry}
        readonly={readonly}
      />
    </div>
  );
});
