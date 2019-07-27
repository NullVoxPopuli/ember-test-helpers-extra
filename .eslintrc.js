'use strict';

module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: [
    '@typescript-eslint',
    'prettier',
  ],
  extends: [
    'eslint:recommended',
    "plugin:@typescript-eslint/eslint-recommended",
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/@typescript-eslint'
  ],
  env: {
    browser: false,
    node: true,
  },
  rules: {
    'semi': ['error', 'always'],
    'prefer-const': 'off',
  },
  overrides: [
    // node files
    {
      files: [
        '.eslintrc.js'
      ],
      env: {
        commonjs: true
      }
    },
    // types
    {
      files: ['types/**'],
      rules: {
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/camelcase': 'off',
      },
    },
  ]
};
