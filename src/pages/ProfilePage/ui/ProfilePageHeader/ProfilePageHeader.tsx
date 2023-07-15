import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import {
  getProfileData, getProfileReadOnly, profileActions, updateProfileData,
} from 'entities/Profile';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserAuthData } from 'entities/User';
import { HStack } from 'shared/ui/Stack';
import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
  className?: string;
}

export const ProfilePageHeader = (props: ProfilePageHeaderProps) => {
  const { t } = useTranslation();
  const { className } = props;
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

  return (
    <HStack gap="16" align="center" className={classNames('', {}, [className])}>
      <div className={cls.title}>
        <Text title={t('Профиль')} />
      </div>
      {canEdit && (
        <div>
          {
        readOnly ? (
          <Button
            theme={ButtonTheme.OUTLINE}
            className={cls.editBtn}
            onClick={onEdit}
          >
            { t('Редактировать')}
          </Button>
        )
          : (
            <HStack gap="8">
              <Button
                theme={ButtonTheme.OUTLINE_RED}
                className={cls.editBtn}
                onClick={onCancelEdit}
              >
                { t('Отменить')}
              </Button>
              <Button
                theme={ButtonTheme.OUTLINE}
                className={cls.saveBtn}
                onClick={onSave}
              >
                { t('Сохранить')}
              </Button>
            </HStack>

          )
      }
        </div>
      )}

    </HStack>
  );
};
