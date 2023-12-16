const fs = require('fs/promises');
const publicApiTemplate = require('./templates/publicApiTemplate');

module.exports = async (props) => {
  const {
    componentName,
    pathResolver,
  } = props;

  try {
    fs.writeFile(
      pathResolver('index.ts'),
      publicApiTemplate({ componentName }),
    );
  } catch (e) {
    console.log('Не удалось создать файл публичного доступа');
  }
};
