module.exports = ({ componentName }) => `export { ${componentName}Schema } from './model/types/${componentName}Schema';
export { ${componentName} } from './ui/${componentName}/${componentName}';`;
