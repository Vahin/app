import { StateSchema } from 'app/providers/StoreProvider';
import { Profile } from 'entities/Profile';
import { getProfileForm } from './getProfileForm';

const data: Profile = {
  firstname: 'Danil',
  lastname: 'Vakrushev',
  country: 'Russia',
  city: 'Chelyabinsk',
  age: 31,
  currency: 'RUB',
  username: 'admin',
};

describe('getProfileForm', () => {
  test('Должен вернуть значение, при заполненном стэйте', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        form: data,
      },
    };

    expect(getProfileForm(state as StateSchema)).toEqual(data);
  });

  test('Должен вернуть значение, при пустом стэйте', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileForm(state as StateSchema)).toEqual(undefined);
  });
});
