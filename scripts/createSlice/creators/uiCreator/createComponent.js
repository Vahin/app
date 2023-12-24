const fs = require('fs/promises');
const componentTemplate = require('./templates/componentTemplate');
const stylesTemplate = require('./templates/stylesTemplate');
const storyTemplate = require('./templates/storyTemplate');

module.exports = async (props) => {
  const {
    layer,
    componentName,
    pathResolver,
  } = props;
  const resolveComponentPath = (...segments) => pathResolver(componentName, ...segments);

  const createComponentDir = async () => {
    try {
      await fs.mkdir(resolveComponentPath());
    } catch (e) {
      console.log(`Не удалось создать компонент ${componentName}`);
    }
  };

  const createTsx = async ({ componentName }) => {
    try {
      await fs.writeFile(
        resolveComponentPath(`${componentName}.tsx`),
        componentTemplate({ componentName }),
      );
    } catch (e) {
      console.log(`Не удалось создать компонент ${componentName}`);
    }
  };

  const createScss = async ({ componentName }) => {
    try {
      await fs.writeFile(
        resolveComponentPath(`${componentName}.module.scss`),
        stylesTemplate({ componentName }),
      );
    } catch (e) {
      console.log(`Не удалось создать файл стилей для компонента ${componentName}`);
    }
  };

  const createStory = async ({ layer, componentName }) => {
    try {
      await fs.writeFile(
        resolveComponentPath(`${componentName}.stories.tsx`),
        storyTemplate({ layer, componentName }),
      );
    } catch (e) {
      console.log(`Не удалось создать файл историй для компонента ${componentName}`);
    }
  };

  await createComponentDir();
  await createTsx({ componentName });
  await createScss({ componentName });
  await createStory({ layer, componentName });
};
