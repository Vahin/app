module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:i18next/recommended',
    'plugin:storybook/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    jsxPragma: null,
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'i18next',
    'react-hooks',
    'fsd-vakhr',
    'unused-imports',
  ],
  ignorePatterns: ['./.fttemplates/**/*'],
  rules: {
    'react/function-component-definition': 0,
    'react/react-in-jsx-scope': 0,
    'react/jsx-uses-react': 0,
    'react/jsx-filename-extension': [
      2,
      {
        extensions: ['js', 'jsx', 'tsx'],
      },
    ],
    'import/no-unresolved': 0,
    'import/extensions': 0,
    'import/prefer-default-export': 0,
    'arrow-body-style': [2, 'as-needed'],
    'react/require-default-props': 0,
    'react/jsx-props-no-spreading': 1,
    'no-shadow': 0,
    'no-unused-vars': 1,
    'import/no-extraneous-dependencies': 0,
    'no-underscore-dangle': 0,
    'i18next/no-literal-string': [
      2,
      {
        markupOnly: true,
        ignoreAttribute: [
          'to',
          'data-testid',
          'align',
          'border',
          'size',
          'filling',
          'theme',
          'target',
          'direction',
          'role',
          'as',
          'justify',
          'variant',
          'strokeVariant',
          'fillVariant',
          'feature',
          'color',
        ],
      },
    ],
    'max-len': [
      2,
      {
        ignoreComments: true,
        code: 125,
      },
    ],
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': 2,
    'no-param-reassign': 0,
    'no-undef': 0,
    'fsd-vakhr/path-checker': ['error', { alias: '@' }],
    'fsd-vakhr/public-api-imports': [
      'error',
      {
        alias: '@',
        testFilesPatterns: [
          '**/*.test.*',
          '**/*.stories.*',
          '**/StoreDecorator.ts*',
        ],
      },
    ],
    'fsd-vakhr/testing-api-imports': [
      'error',
      {
        alias: '@',
        testFilesPatterns: [
          '**/*.test.*',
          '**/*.stories.*',
          '**/StoreDecorator.ts*',
        ],
      },
    ],
    'fsd-vakhr/layers-imports': [
      'error',
      {
        alias: '@',
        ignoreImportPatterns: ['**/StoreProvider', '**/testing'],
      },
    ],
    'unused-imports/no-unused-imports': 'error',
    'react/jsx-first-prop-new-line': [2, 'multiline'],
    'react/jsx-max-props-per-line': [2, { maximum: 1, when: 'multiline' }],
    'react/no-unstable-nested-components': 1,
  },
  globals: {
    __IS_DEV__: true,
    __API__: true,
    __PROJECT__: true,
  },
  overrides: [
    {
      files: ['**/src/**/*.test.{ts,tsx}', '**/src/**/*.stories.{ts,tsx}'],
      rules: {
        'i18next/no-literal-string': 0,
        'max-len': 0,
      },
    },
  ],
};
