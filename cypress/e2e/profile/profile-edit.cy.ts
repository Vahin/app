let profileId = '';

describe('Пользователь заходит на страницу профиля', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.login().then((data) => {
      profileId = data.id;
      cy.visit(`/profile/${data.id}`);
    });
  });

  afterEach(() => {
    cy.resetProfile(profileId);
  });

  it('И профиль успешно загружается', () => {
    cy.getByTestId('ProfileCard.Firstname').should('have.value', 'Тест');
  });

  it('И редактирует его', () => {
    cy.updateProfile('new', 'lastname');
    cy.getByTestId('ProfileCard.Firstname').should('have.value', 'new');
    cy.getByTestId('ProfileCard.Lastname').should('have.value', 'lastname');
  });
});
