import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { updateFeatureFlagsMutation } from '../../api/userApi';
import { getUserFeatures } from '../selectors/features/features';
import { FeatureFlags } from '@/shared/types/featureFlags';
import { getUserAuthData } from '../selectors/getUserAuthData/getUserAuthData';

export const updateFeatureFlags = createAsyncThunk<
  FeatureFlags,
  Partial<FeatureFlags>,
  ThunkConfig<string>
>('user/updateFeatureFlags', async (newFeatures, thunkAPI) => {
  const { dispatch, rejectWithValue, getState } = thunkAPI;
  const features = getUserFeatures(getState());
  const id = getUserAuthData(getState())?.id;

  if (!id) {
    return rejectWithValue('');
  }

  try {
    const response = await dispatch(
      updateFeatureFlagsMutation({
        userId: id,
        newFeatures: {
          ...features,
          ...newFeatures,
        },
      }),
    ).unwrap();

    if (!response.features) {
      return rejectWithValue('');
    }

    return response.features;
  } catch (e) {
    return rejectWithValue('error');
  }
});
