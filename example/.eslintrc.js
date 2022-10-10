module.exports = {
  root: true,
  extends: ['@react-native-community/eslint-config', 'eslint-config-prettier'],
  // extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'detox'],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.e2e.js'],
      env: {
        'detox/detox': true,
        jest: true,
        'jest/globals': true,
      },
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
      },
    },
  ],
  rules: {
    'prettier/prettier': 0,
  },
};
