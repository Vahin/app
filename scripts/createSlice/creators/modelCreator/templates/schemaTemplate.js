module.exports = ({ componentName }) => `/* import { EntityState } from '@reduxjs/toolkit'; */

export interface ${componentName}Schema /* extends EntityState<Entity> */ {
  error?: string;
  isLoading?: boolean;
}`;
