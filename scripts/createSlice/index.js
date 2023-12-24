const createTemplate = require('./creators');

const layer = process.argv[2];
const sliceName = process.argv[3];

const layers = ['entities', 'features', 'pages', 'widjets'];

if (!layer || !layers.includes(layer)) {
  throw new Error(`Укажите один из слоев: ${layers.join(', ')}`);
}

if (!sliceName) {
  throw new Error('Укажите название слайса');
}

createTemplate(layer, sliceName);
