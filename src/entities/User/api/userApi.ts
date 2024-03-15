import { rtkApi } from '@/shared/api/rtkApi';
import { JsonSettings } from '../model/types/jsonSettings';
import { User } from '../model/types/user';
import { UpdateFeatureFlagsOptions } from '../model/types/UpdateFeatureFlagsOptions';

interface SetJsonSettingsArgs {
  userId: string;
  jsonSettings: JsonSettings;
}

const userApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    setJsonSettings: build.mutation<User, SetJsonSettingsArgs>({
      query: ({ userId, jsonSettings }) => ({
        url: `/users/${userId}`,
        method: 'PATCH',
        body: {
          jsonSettings,
        },
      }),
    }),

    updateFeatureFlags: build.mutation<User, UpdateFeatureFlagsOptions>({
      query: ({ userId, newFeatures }) => ({
        url: `/users/${userId}`,
        method: 'PATCH',
        body: {
          features: newFeatures,
        },
      }),
    }),

    getUserById: build.query<User, string>({
      query: (userId) => ({
        url: `/users/${userId}`,
        method: 'GET',
      }),
    }),
  }),
});

export const setJsonSettingsMutation =
  userApi.endpoints.setJsonSettings.initiate;

export const getUserByIdQuery = userApi.endpoints.getUserById.initiate;

export const updateFeatureFlagsMutation =
  userApi.endpoints.updateFeatureFlags.initiate;
