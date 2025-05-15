const tsParser = require('@typescript-eslint/parser');
const ngParser = require('@angular-eslint/template-parser');
const globals = require('globals');
const prettier = require('eslint-plugin-prettier');

function cleanGlobals(globalsObj) {
  return Object.fromEntries(
    Object.entries(globalsObj).filter(
      ([key]) => key.trim() === key
    )
  );
}

module.exports = [
  {
    files: ['**/*.ts'],
    plugins: {
      prettier: prettier,
    },
    languageOptions: {
      parser: tsParser,
      globals: cleanGlobals(globals.browser),
      parserOptions: {
        project: ['./tsconfig.app.json', './tsconfig.spec.json'],
      },
    },
    rules: {
      'prettier/prettier': 'error',
    },
  },
  {
    files: ['**/*.html'],
    plugins: {
      prettier: prettier,
    },
    languageOptions: {
      parser: ngParser,
    },
    rules: {
      'prettier/prettier': ['error', { parser: 'angular' }],
    },
  },
];
