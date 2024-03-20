import { buildSelector } from '@/shared/lib/store';
import { JsonSettings } from '../../types/jsonSettings';

const defaultJsonSettings: JsonSettings = {
  theme: undefined,
};

export const [useJsonSettings, getJsonSettings] = buildSelector(
  (state) => state.user.authData?.jsonSettings ?? defaultJsonSettings,
);

export const [useUserTheme] = buildSelector(
  (state) => state.user.authData?.jsonSettings?.theme,
);
