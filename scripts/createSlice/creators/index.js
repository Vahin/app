const fs = require('fs/promises');
const resolveRoot = require('../utils/resolveRoot');
const firstCharToUpperCase = require('../utils/firstCharToUpperCase');
const createUI = require('./uiCreator/createUI');
const createPublicApi = require('./publicApiCreator/createPublicApi');
const createModel = require('./modelCreator/createModel');

module.exports = async (layer, sliceName) => {
  const resolveSlicePath = (...segments) => resolveRoot('src', layer, sliceName, ...segments);

  const props = {
    layer,
    sliceName,
    componentName: firstCharToUpperCase(sliceName),
    pathResolver: resolveSlicePath,
  };

  try {
    await fs.mkdir(resolveSlicePath());
  } catch (e) {
    console.log(`Не удалось создать директорию для слайса ${sliceName}`);
  }

  await createUI(props);
  await createPublicApi(props);
  await createModel(props);
};
