import path from 'path';
import { Project } from 'ts-morph';

const project = new Project({});

project.addSourceFilesAtPaths('./src/**/*.ts');
project.addSourceFilesAtPaths('./src/**/*.tsx');

const files = project.getSourceFiles();
const uiPath = path.resolve(__dirname, '..', '..', 'src', 'shared', 'ui');
const sharedUIDirectory = project.getDirectory(uiPath);
const componentsDir = sharedUIDirectory?.getDirectories();

const isAbsolute = (value: string) => {
  const layers = ['app', 'shared', 'pages', 'widjets', 'features', 'entities'];

  return layers.some((layer) => value.startsWith(layer));
};

componentsDir?.forEach((directory) => {
  const indexFilePath = `${directory.getPath()}/index.ts`;
  const indexFile = directory.getSourceFile(indexFilePath);

  if (!indexFile) {
    const sourceCode = `export * from './${directory.getBaseName()}'`;
    const file = directory.createSourceFile(indexFilePath, sourceCode, { overwrite: true });

    file.save();
  }
});

files.forEach((sourceFile) => {
  const importDeclarations = sourceFile.getImportDeclarations();

  importDeclarations.forEach((importDeclaration) => {
    const value = importDeclaration.getModuleSpecifierValue();
    const valueWithoutAlias = value.replace('@/', '');

    const segments = valueWithoutAlias.split('/');
    const isSharedLayer = segments[0] === 'shared';
    const isUiSlice = segments[1] === 'ui';

    if (isAbsolute(valueWithoutAlias) && isSharedLayer && isUiSlice) {
      const result = valueWithoutAlias.split('/').slice(0, 3).join('/');
      importDeclaration.setModuleSpecifier(`@/${result}`);
    }
  });
});

project.save();
