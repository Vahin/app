const fs = require('fs/promises');
const createComponent = require('./createComponent');

module.exports = async (props) => {
  const {
    layer,
    componentName,
    pathResolver,
  } = props;
  const resolveUIPath = (...segments) => pathResolver('ui', ...segments);

  const createUIDir = async () => {
    try {
      await fs.mkdir(resolveUIPath());
    } catch (e) {
      console.log('Не удалось создать UI директорию');
    }
  };

  await createUIDir();
  await createComponent({
    layer,
    componentName,
    pathResolver: resolveUIPath,
  });
};
