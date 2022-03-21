module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier', 'react-hooks'],
  extends: [
    'eslint:recommended',
    'prettier',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jest/recommended',
  ],
  rules: {
    'prettier/prettier': 'error',
    'no-console': 'error',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
  },
  env: {
    browser: true,
    node: true,
    jest: true,
  },
}
