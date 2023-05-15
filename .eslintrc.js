module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
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
  ],
  rules: {
    'react/function-component-definition': 0,
    'react/react-in-jsx-scope': 0,
    'react/jsx-uses-react': 0,
    'react/jsx-filename-extension': [2, { extensions: ['js', 'jsx', 'tsx'] }],
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
  },
  globals: {
    __IS_DEV__: true,
  },
};