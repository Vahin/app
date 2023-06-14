import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileData } from './getProfileData';
import { Profile } from '../../types/profile';

const data: Profile = {
  firstname: 'Danil',
  lastname: 'Vakrushev',
  country: 'Russia',
  city: 'Chelyabinsk',
  age: 31,
  currency: 'RUB',
  username: 'admin',
};

describe('getProfileData', () => {
  test('Должен вернуть значение, при заполненном стэйте', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        data,
      },
    };

    expect(getProfileData(state as StateSchema)).toEqual(data);
  });

  test('Должен вернуть значение, при пустом стэйте', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileData(state as StateSchema)).toEqual(undefined);
  });
});
