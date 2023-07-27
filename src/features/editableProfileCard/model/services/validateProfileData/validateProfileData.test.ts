import { Profile } from 'entities/Profile';
import { validateProfileData } from './validateProfileData';
import { ValidateProfileError } from '../../types/EditableProfileCardSchema';

const data: Profile = {
  firstname: 'Danil',
  lastname: 'Vakrushev',
  country: 'Russia',
  city: 'Chelyabinsk',
  age: 31,
  currency: 'RUB',
  username: 'admin',
};

describe('validateProfileData', () => {
  test('Возвращает пустой массив без ошибок, при вводе корректных данных', async () => {
    const result = validateProfileData(data);

    expect(result).toEqual([]);
  });

  test('Возвращает ошибку, при вводе данных без имени и фамилии', async () => {
    const result = validateProfileData({ ...data, firstname: '', lastname: '' });

    expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
  });

  test('Возвращает ошибку, при вводе данных с некорректным возрастом', async () => {
    const result = validateProfileData({ ...data, age: Number('31b') });

    expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
  });

  test('Возвращает ошибку, при отсутствующих данных', async () => {
    const result = validateProfileData({ });

    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_AGE,
      ValidateProfileError.INCORRECT_COUNTRY,
    ]);
  });
});
