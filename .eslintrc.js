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
  plugins: ['react', '@typescript-eslint', 'i18next', 'react-hooks'],
  rules: {
    'react/function-component-definition': 0,
    'react/react-in-jsx-scope': 0,
    'react/jsx-uses-react': 0,
    'react/jsx-filename-extension': [2, {
      extensions: ['js', 'jsx', 'tsx'],
    }],
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
    'i18next/no-literal-string': [2, {
      markupOnly: true,
      ignoreAttribute: ['to', 'data-testid'],
    }],
    'max-len': [2, {
      ignoreComments: true,
      code: 120,
    }],
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': 2,
    'no-param-reassign': 0,
    'no-undef': 0,
  },
  globals: {
    __IS_DEV__: true,
    __API__: true,
  },
  overrides: [{
    files: ['**/src/**/*.test.{ts,tsx}', '**/src/**/*.stories.{ts,tsx}'],
    rules: {
      'i18next/no-literal-string': 0,
      'max-len': 0,
    },
  }],
};
