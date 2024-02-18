export const updateProfile = (firstname: string, lastname: string) => {
  cy.getByTestId('EditableProfileCardHeader.EditButton').click();
  cy.getByTestId('ProfileCard.Firstname').clear().type(firstname);
  cy.getByTestId('ProfileCard.Lastname').clear().type(lastname);
  cy.getByTestId('EditableProfileCardHeader.SaveButton').click();
};

export const resetProfile = (profileId: string) => {
  cy.request({
    method: 'PUT',
    url: `http://localhost:8000/profile/${profileId}`,
    headers: { Authorization: 'asasf' },
    body: {
      id: '4',
      firstname: 'Тест',
      lastname: 'Юзеров',
      age: 23,
      currency: 'EUR',
      country: 'Russia',
      city: 'Chelyabinsk',
      username: 'user',
      avatar: 'https://pp.userapi.com/c841025/v841025781/5b236/ymkNUip4BB4.jpg',
    },
  });
};

declare global {
  namespace Cypress {
    interface Chainable {
      updateProfile(firstname: string, lastname: string): Chainable<void>;
      resetProfile(profileId: string): Chainable<void>
    }
  }
}
