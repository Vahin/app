import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { HStack } from '@/shared/ui/deprecated/Stack';
import { Text } from '@/shared/ui/deprecated/Text';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserAuthData } from '@/entities/User';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { profileActions } from '../../model/slice/profileSlice';
import { getProfileReadOnly } from '../../model/selectors/getProfileReadOnly/getProfileReadOnly';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';

interface EditableProfileCardHeaderProps {
  className?: string;
}

export const EditableProfileCardHeader = memo(
  (props: EditableProfileCardHeaderProps) => {
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
      <HStack
        gap='16'
        justify='spaceBetween'
        align='center'
        max
        className={classNames('', {}, [className])}
      >
        <div>
          <Text title={t('Профиль')} />
        </div>
        {canEdit && (
          <div>
            {readOnly ? (
              <Button
                theme={ButtonTheme.OUTLINE}
                size={ButtonSize.S}
                onClick={onEdit}
                data-testid='EditableProfileCardHeader.EditButton'
              >
                {t('Редактировать')}
              </Button>
            ) : (
              <HStack gap='8'>
                <Button
                  theme={ButtonTheme.OUTLINE_RED}
                  size={ButtonSize.S}
                  onClick={onCancelEdit}
                  data-testid='EditableProfileCardHeader.CancelButton'
                >
                  {t('Отменить')}
                </Button>
                <Button
                  theme={ButtonTheme.OUTLINE}
                  size={ButtonSize.S}
                  onClick={onSave}
                  data-testid='EditableProfileCardHeader.SaveButton'
                >
                  {t('Сохранить')}
                </Button>
              </HStack>
            )}
          </div>
        )}
      </HStack>
    );
  },
);
