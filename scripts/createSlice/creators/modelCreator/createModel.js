const fs = require('fs/promises');
const selectorTemplate = require('./templates/selectorTemplate');
const sliceTemplate = require('./templates/sliceTemplate');
const schemaTemplate = require('./templates/schemaTemplate');

module.exports = async (props) => {
  const {
    layer,
    sliceName,
    componentName,
    pathResolver,
  } = props;

  const resolveModelPath = (...segments) => pathResolver('model', ...segments);

  const createModelDir = async () => {
    try {
      await fs.mkdir(resolveModelPath());
    } catch (e) {
      console.log('Не удалось создать директорий моделей');
    }
  };

  const createSelectors = async ({ sliceName, componentName }) => {
    try {
      await fs.mkdir(resolveModelPath('selectors'));
      await fs.mkdir(resolveModelPath('selectors', componentName));
      await fs.writeFile(
        resolveModelPath('selectors', componentName, `get${componentName}.ts`),
        selectorTemplate({ sliceName, componentName }),
      );
    } catch (e) {
      console.log('Не удалось создать селекторы');
    }
  };

  const createSlice = async ({ sliceName, componentName }) => {
    try {
      await fs.mkdir(resolveModelPath('slice'));
      await fs.writeFile(
        resolveModelPath('slice', `${sliceName}Slice.ts`),
        sliceTemplate({ sliceName, componentName }),
      );
    } catch (e) {
      console.log('Не удалось создать селекторы');
    }
  };

  const createSchema = async ({ componentName }) => {
    try {
      await fs.mkdir(resolveModelPath('types'));
      await fs.writeFile(
        resolveModelPath('types', `${componentName}Schema.ts`),
        schemaTemplate({ componentName }),
      );
    } catch (e) {
      console.log('Не удалось создать селекторы');
    }
  };

  await createModelDir();
  await createSelectors({ sliceName, componentName });
  await createSlice({ sliceName, componentName });
  await createSchema({ componentName });
};
