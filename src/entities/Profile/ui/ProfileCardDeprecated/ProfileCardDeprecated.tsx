import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextTheme } from '@/shared/ui/deprecated/Text';
import { Input } from '@/shared/ui/deprecated/Input';
import { Loader } from '@/shared/ui/deprecated/Loader';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import { CurrencySelect } from '@/entities/Currency';
import { CountrySelect } from '@/entities/Country';
import { HStack } from '@/shared/ui/redisigned/Stack';
import cls from './ProfileCard.module.scss';
import { ProfileCardProps } from '../../types/ProfileCardProps';

export const ProfileCardDeprecated = memo((props: ProfileCardProps) => {
  const {
    className,
    data,
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
      <div
        className={classNames(cls.ProfileCard, {}, [className, cls.loading])}
      >
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
          align='center'
        />
      </div>
    );
  }

  return (
    <div className={classNames(cls.ProfileCard, {}, [className])}>
      {data?.avatar && (
        <div className={cls.avatarWrapper}>
          <Avatar src={data?.avatar} alt={t('Аватар пользователя')} />
        </div>
      )}

      <Input
        value={data?.firstname}
        placeholder={t('Имя')}
        className={cls.input}
        onChange={onChangeFirstname}
        readOnly={readonly}
        data-testid='ProfileCard.Firstname'
      />
      <Input
        value={data?.lastname}
        placeholder={t('Фамилия')}
        className={cls.input}
        onChange={onChangeLastname}
        readOnly={readonly}
        data-testid='ProfileCard.Lastname'
      />
      <Input
        value={data?.age}
        placeholder={t('Возраст')}
        className={cls.input}
        onChange={onChangeAge}
        readOnly={readonly}
        data-testid='ProfileCard.Age'
      />
      <Input
        value={data?.city}
        placeholder={t('Город')}
        className={cls.input}
        onChange={onChangeCity}
        readOnly={readonly}
        data-testid='ProfileCard.City'
      />
      <Input
        value={data?.username}
        placeholder={t('Псевдоним')}
        className={cls.input}
        onChange={onChangeUsername}
        readOnly={readonly}
        data-testid='ProfileCard.Username'
      />
      <Input
        value={data?.avatar}
        placeholder={t('Ссылка на аватар')}
        className={cls.input}
        onChange={onChangeAvatar}
        readOnly={readonly}
        data-testid='ProfileCard.Avatar'
      />
      <HStack gap='8'>
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
      </HStack>
    </div>
  );
});
