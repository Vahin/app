import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import { ComponentRender } from '@/shared/lib/tests/ComponentRender/ComponentRender';
import Avatar from '@/shared/assets/test/medoed.jpeg';
import { Profile } from '@/entities/Profile/testing';
import { $api } from '@/shared/api/api';
import { profileReducer } from '../../model/slice/profileSlice';
import { EditableProfileCard } from './EditableProfileCard';

const data: Profile = {
  username: 'username',
  firstname: 'firstname',
  lastname: 'lastname',
  age: 30,
  avatar: Avatar,
  city: 'city',
  country: 'Russia',
  currency: 'EUR',
  id: '1',
};

const options = {
  initialState: {
    profile: {
      data,
      form: data,
      readonly: true,
    },
    user: {
      authData: {
        id: '1',
      },
    },
  },
  asyncReducers: {
    profile: profileReducer,
  },
};

describe('features/EditableProfileCard', () => {
  test('При нажатии на кнопку редактирования должны отображаться кнопки сохранения и отмены.', async () => {
    ComponentRender(<EditableProfileCard id='1' />, options);

    await userEvent.click(
      screen.getByTestId('EditableProfileCardHeader.EditButton'),
    );

    expect(
      screen.getByTestId('EditableProfileCardHeader.CancelButton'),
    ).toBeInTheDocument();
    expect(
      screen.getByTestId('EditableProfileCardHeader.SaveButton'),
    ).toBeInTheDocument();
  });

  test('При нажатии на кнопку отмены должен вернуться к первоначальному состоянию.', async () => {
    ComponentRender(<EditableProfileCard id='1' />, options);

    await userEvent.click(
      screen.getByTestId('EditableProfileCardHeader.EditButton'),
    );

    await userEvent.clear(screen.getByTestId('ProfileCard.Firstname'));
    await userEvent.clear(screen.getByTestId('ProfileCard.Lastname'));
    await userEvent.type(screen.getByTestId('ProfileCard.Firstname'), 'user');
    await userEvent.type(screen.getByTestId('ProfileCard.Lastname'), 'user');

    expect(screen.getByTestId('ProfileCard.Firstname')).toHaveValue('user');
    expect(screen.getByTestId('ProfileCard.Lastname')).toHaveValue('user');

    await userEvent.click(
      screen.getByTestId('EditableProfileCardHeader.CancelButton'),
    );

    expect(screen.getByTestId('ProfileCard.Firstname')).toHaveValue(
      'firstname',
    );
    expect(screen.getByTestId('ProfileCard.Lastname')).toHaveValue('lastname');
  });

  test('Отображается ошибка при вводе некорректных данных.', async () => {
    ComponentRender(<EditableProfileCard id='1' />, options);

    await userEvent.click(
      screen.getByTestId('EditableProfileCardHeader.EditButton'),
    );
    await userEvent.clear(screen.getByTestId('ProfileCard.Firstname'));
    await userEvent.click(
      screen.getByTestId('EditableProfileCardHeader.SaveButton'),
    );

    expect(
      screen.getByTestId('EditableProfileCard.Error.Paragraph'),
    ).toBeInTheDocument();
  });

  test('Отправляется запрос на сервер при вводе корректных данных.', async () => {
    const mockPutReq = jest.spyOn($api, 'put');
    ComponentRender(<EditableProfileCard id='1' />, options);

    await userEvent.click(
      screen.getByTestId('EditableProfileCardHeader.EditButton'),
    );
    await userEvent.type(screen.getByTestId('ProfileCard.Firstname'), 'user');
    await userEvent.click(
      screen.getByTestId('EditableProfileCardHeader.SaveButton'),
    );

    expect(mockPutReq).toHaveBeenCalled();
  });
});
