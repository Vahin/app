import { Page } from 'widjets/Page';
import { EditableProfileCard } from 'features/editableProfileCard';
import { useParams } from 'react-router-dom';
import { VStack } from 'shared/ui/Stack';

const ProfilePage = () => {
  const { id } = useParams<{ id: string}>();

  if (!id) return null;

  return (
    <Page>
      <VStack gap="16" max align="stretch">
        <EditableProfileCard id={id} />
      </VStack>
    </Page>
  );
};

export default ProfilePage;
