import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { CurrencySelect } from '@/entities/Currency';
import { CountrySelect } from '@/entities/Country';
import { HStack, VStack } from '@/shared/ui/redisigned/Stack';
import { ProfileCardProps } from '../../types/ProfileCardProps';
import { Text } from '@/shared/ui/redisigned/Text';
import { Input } from '@/shared/ui/redisigned/Input';
import { Card } from '@/shared/ui/redisigned/Card';
import cls from './ProfileCard.module.scss';
import { Avatar } from '@/shared/ui/redisigned/Avatar';
import { Skeleton } from '@/shared/ui/redisigned/Skeleton';

export const ProfileCardRedisigned = memo((props: ProfileCardProps) => {
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
      <Card className={classNames('', {}, [className])} padding='24'>
        <VStack gap='32'>
          <Skeleton
            width={120}
            height={120}
            border='50%'
            className={cls.avatarWrapper}
          />
          <HStack gap='24' max>
            <VStack gap='16' max>
              <Skeleton height={38} border='48px' />
              <Skeleton height={38} border='48px' />
              <Skeleton height={38} border='48px' />
              <Skeleton height={38} border='48px' />
            </VStack>
            <VStack gap='16' max>
              <Skeleton height={38} border='48px' />
              <Skeleton height={38} border='48px' />
              <Skeleton height={38} border='48px' width='50%' />
              <Skeleton height={38} border='48px' width='50%' />
            </VStack>
          </HStack>
        </VStack>
      </Card>
    );
  }

  if (error) {
    return (
      <div className={classNames('', {}, [className])}>
        <Text
          title={t('Ошибка при загрузке')}
          text={t('Попробуйте обновить страницу')}
          variant='error'
          align='center'
        />
      </div>
    );
  }

  return (
    <Card className={classNames('', {}, [className])} padding='24'>
      <VStack gap='32'>
        {data?.avatar && (
          <div className={cls.avatarWrapper}>
            <Avatar
              size={120}
              src={data?.avatar}
              alt={t('Аватар пользователя')}
            />
          </div>
        )}
        <HStack gap='24' max>
          <VStack gap='16' max>
            <Input
              value={data?.firstname}
              placeholder={t('Имя')}
              label={t('Имя')}
              onChange={onChangeFirstname}
              readOnly={readonly}
              data-testid='ProfileCard.Firstname'
            />
            <Input
              value={data?.lastname}
              placeholder={t('Фамилия')}
              label={t('Фамилия')}
              onChange={onChangeLastname}
              readOnly={readonly}
              data-testid='ProfileCard.Lastname'
            />
            <Input
              value={data?.age}
              placeholder={t('Возраст')}
              label={t('Возраст')}
              onChange={onChangeAge}
              readOnly={readonly}
              data-testid='ProfileCard.Age'
            />
            <Input
              value={data?.city}
              placeholder={t('Город')}
              label={t('Город')}
              onChange={onChangeCity}
              readOnly={readonly}
              data-testid='ProfileCard.City'
            />
          </VStack>
          <VStack gap='16' max>
            <Input
              value={data?.username}
              placeholder={t('Псевдоним')}
              label={t('Имя пользователя')}
              onChange={onChangeUsername}
              readOnly={readonly}
              data-testid='ProfileCard.Username'
            />
            <Input
              value={data?.avatar}
              placeholder={t('Ссылка на аватар')}
              label={t('Ссылка на аватар')}
              onChange={onChangeAvatar}
              readOnly={readonly}
              data-testid='ProfileCard.Avatar'
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
          </VStack>
        </HStack>
      </VStack>
    </Card>
  );
});
