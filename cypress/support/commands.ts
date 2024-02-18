import * as commonCommands from './commands/common';
import * as profileCommands from './commands/profile';
import * as articlesCommands from './commands/articles';
import * as commentCommands from './commands/comments';
import * as ratingCommands from './commands/rating';

Cypress.Commands.addAll(commonCommands);
Cypress.Commands.addAll(profileCommands);
Cypress.Commands.addAll(articlesCommands);
Cypress.Commands.addAll(commentCommands);
Cypress.Commands.addAll(ratingCommands);

export {};
