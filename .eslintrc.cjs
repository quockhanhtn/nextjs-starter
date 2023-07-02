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
    // @typescript-eslint
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      { args: 'none', argsIgnorePattern: '^_', caughtErrors: 'none', ignoreRestSiblings: true },
    ],
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-shadow': 'off',

    // others
    'arrow-body-style': 'off',
    'comma-dangle': 'off',
    'consistent-return': 'off',
    'default-case': 'warn',
    'max-len': 'off',
    'no-alert': 'off',
    'no-console': 'off',
    'no-empty': 'warn',
    'no-plusplus': 'off',
    'no-restricted-exports': 'off',

    // import
    'import/prefer-default-export': 0,

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
    'react/jsx-no-constructed-context-values': 'warn',
    'react/jsx-no-useless-fragment': 'warn',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/no-array-index-key': 'off',
    'react/no-children-prop': 'off',
    'react/no-inline-styles': 'off',
    'react/no-unescaped-entities': 'off',
    'react/no-unknown-property': 'off',
    'react/no-unstable-nested-components': ['warn', { allowAsProps: true }],
    'react/no-unused-prop-types': 'warn',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
    'react/self-closing-comp': 'warn',
    'react/jsx-pascal-case': ['warn', { ignore: ['Icons.*'] }],

    // jsx-a11y
    'jsx-a11y/label-has-associated-control': 'warn',
    'jsx-a11y/anchor-is-valid': 'warn',
  },
};
