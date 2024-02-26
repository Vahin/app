import { buildSelector } from '@/shared/lib/store';
import { JsonSettings } from '../../types/jsonSettings';

const defaultJsonSettings: JsonSettings = {
  theme: undefined,
  isFirstVisit: true,
  isArticlePageWasOpened: false,
};

export const [useJsonSettings, getJsonSettings] = buildSelector(
  (state) => state.user.authData?.jsonSettings ?? defaultJsonSettings,
);
