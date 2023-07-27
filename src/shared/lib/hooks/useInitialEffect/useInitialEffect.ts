import { useEffect } from 'react';

export const useInitialEffect = (callback: () => void, deps: unknown[]) => {
  useEffect(() => {
    if (__PROJECT__ !== 'storybook' && __PROJECT__ !== 'jest') {
      callback();
    }
    // eslint-disable-next-line
  }, deps);
};
