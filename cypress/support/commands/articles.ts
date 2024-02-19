import { Article } from '../../../src/entities/Article';

const defaultArticle = {
  userId: '1',
  title: 'Political Landscape in 2022',
  subtitle: 'Key events and developments in global politics',
  img:
    'https://www.ifri.org/sites/default/files/styles/image_contenu_article/public/' +
    'thumbnails/image/shutterstock_174209186.jpg?itok=DBwZsCZr',
  views: 1021,
  createdAt: '10.06.2022',
  type: ['POLITICS'],
  blocks: [],
};

export const createArticle = (article?: Article) => {
  cy.request({
    method: 'POST',
    url: 'http://localhost:8000/articles',
    headers: { Authorization: 'asasf' },
    body: article ?? defaultArticle,
  }).then((response) => response.body);
};

export const removeArticle = (articleId: string) => {
  cy.request({
    method: 'DELETE',
    url: `http://localhost:8000/articles/${articleId}`,
    headers: { Authorization: 'asasf' },
  });
};

declare global {
  namespace Cypress {
    interface Chainable {
      createArticle(article?: Article): Chainable<Article>;
      removeArticle(articleId: string): Chainable<void>;
    }
  }
}
