const { init } = require('@fullstacksjs/eslint-config/init');

module.exports = init({
  root: true,
  modules: {
    typescript: {
      parserProject: './tsconfig.eslint.json',
    },
    test: true,
  },
  overrides: [
    {
      files: ['./src/**/*.ts'],
      rules: {
        '@typescript-eslint/ban-types': 'off',
        '@typescript-eslint/prefer-for-of': 'off',
        '@typescript-eslint/no-throw-literal': 'off',
        '@typescript-eslint/dot-notation': 'off',
        'fp/no-let': 'off',
        'fp/no-loops': 'off',
        'func-style': ['error', 'declaration'],
        'valid-jsdoc': 'error',
      },
    },
    {
      files: ['./src/guards/**/*.ts', '*.spec.ts'],
      rules: {
        'func-style': 'off',
        'fp/no-loops': 'off',
        'no-sparse-arrays': 'off',
        '@typescript-eslint/no-empty-function': 'off',
      },
    },
  ],
});
