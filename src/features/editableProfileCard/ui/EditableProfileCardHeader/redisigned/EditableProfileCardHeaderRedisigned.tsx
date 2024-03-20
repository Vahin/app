import { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserAuthData } from '@/entities/User';
import { getProfileData } from '../../../model/selectors/getProfileData/getProfileData';
import { profileActions } from '../../../model/slice/profileSlice';
import { getProfileReadOnly } from '../../../model/selectors/getProfileReadOnly/getProfileReadOnly';
import { updateProfileData } from '../../../model/services/updateProfileData/updateProfileData';
import { Button } from '@/shared/ui/redisigned/Button';
import { Avatar } from '@/shared/ui/redisigned/Avatar';
import { EditableProfileCardHeaderProps } from '../../../types/EditableProfileCardHeaderProps';
import cls from './EditableProfileCardHeader.module.scss';
import { Flex } from '@/shared/ui/redisigned/Stack/Flex/Flex';
import { Skeleton } from '@/shared/ui/redisigned/Skeleton';

export const EditableProfileCardHeaderRedisigned = (
  props: EditableProfileCardHeaderProps,
) => {
  const { t } = useTranslation();
  const { className, data } = props;
  const readOnly = useSelector(getProfileReadOnly);
  const dispatch = useAppDispatch();
  const authData = useSelector(getUserAuthData);
  const profileData = useSelector(getProfileData);
  const canEdit = authData?.id === profileData?.id;

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const onSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  const rightButton = useMemo(() => {
    if (!canEdit) return null;

    if (!readOnly && canEdit) {
      return (
        <Button
          onClick={onSave}
          variant='save'
          data-testid='EditableProfileCardHeader.SaveButton'
        >
          {t('Сохранить')}
        </Button>
      );
    }

    return (
      <Button
        onClick={onEdit}
        className={cls.edit}
        data-testid='EditableProfileCardHeader.EditButton'
      >
        {t('Редактировать')}
      </Button>
    );
  }, [canEdit, onEdit, onSave, readOnly, t]);

  return (
    <Flex
      gap='16'
      justify='spaceBetween'
      align='center'
      direction='rowReverse'
      max
      className={classNames(cls.container, {}, [className])}
    >
      {!data?.avatar ? (
        <Skeleton
          width={120}
          height={120}
          border='50%'
          className={cls.avatar}
        />
      ) : (
        <Avatar
          size={120}
          src={data?.avatar}
          alt={t('Аватар пользователя')}
          className={cls.avatar}
        />
      )}
      {rightButton}
      {!readOnly && (
        <Button
          onClick={onCancelEdit}
          variant='cancel'
          data-testid='EditableProfileCardHeader.CancelButton'
        >
          {t('Отменить')}
        </Button>
      )}
    </Flex>
  );
};
