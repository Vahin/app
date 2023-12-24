module.exports = ({ componentName, sliceName }) => `import { StateSchema } from 'app/providers/StoreProvider';

export const get${componentName} = (state: StateSchema) => state?.${sliceName};`;
