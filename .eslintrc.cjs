/** @type {import('eslint').ESLint.ConfigData} */

module.exports = {
  globals: {
    React: true,
    JSX: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'eslint:recommended',
    'next/core-web-vitals',
    'plugin:prettier/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      tsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
    warnOnUnsupportedTypeScriptVersion: false,
  },
  plugins: ['prettier', 'react-hooks', 'react'],
  rules: {
    'arrow-body-style': 'off',
    'comma-dangle': 'off',
    'max-len': 'off',
    'no-alert': 'off',
    'no-console': 'off',
    'no-empty': 'warn',
    'no-plusplus': 'off',
    'no-unused-vars': [
      'warn',
      {
        ignoreRestSiblings: false,
        args: 'none',
      },
    ],
    'no-restricted-exports': 'off',

    // prettier
    'prettier/prettier': 'error',

    // react-hooks
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',

    // react
    'react/button-has-type': 'warn',
    'react/destructuring-assignment': 'off',
    'react/display-name': 'off',
    'react/forbid-prop-types': 'off',
    'react/function-component-definition': 'off',
    'react/jsx-filename-extension': 'off',
    'react/jsx-key': 'warn',
    'react/jsx-no-bind': 'off',
    'react/jsx-no-useless-fragment': 'warn',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-pascal-case': 'warn',
    'react/jsx-props-no-spreading': 'off',
    'react/no-array-index-key': 'off',
    'react/no-children-prop': 'off',
    'react/no-inline-styles': 'off',
    'react/no-unescaped-entities': 'off',
    'react/no-unknown-property': 'off',
    'react/no-unused-prop-types': 'warn',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
    'react/self-closing-comp': 'warn',
  },
};
