import { useEffect } from 'react';
import { useUserFeatureByKey } from '@/entities/User';

export const useAppRedisign = () => {
  const redisigned = useUserFeatureByKey('isAppRedisigned');

  useEffect(() => {
    document.documentElement.dataset.redisigned = redisigned ? 'true' : 'false';
  }, [redisigned]);
};
