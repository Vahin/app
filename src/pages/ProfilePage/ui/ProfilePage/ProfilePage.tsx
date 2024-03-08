import { useParams } from 'react-router-dom';
import { Page } from '@/widjets/Page';
import { EditableProfileCard } from '@/features/editableProfileCard';
import { VStack } from '@/shared/ui/redisigned/Stack';

const ProfilePage = () => {
  const { id } = useParams<{ id: string }>();

  if (!id) return null;

  return (
    <Page data-testid='ProfilePage'>
      <VStack gap='16' max align='stretch'>
        <EditableProfileCard id={id} />
      </VStack>
    </Page>
  );
};

export default ProfilePage;
