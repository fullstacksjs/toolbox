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
        'valid-jsdoc': 'error',
        '@typescript-eslint/ban-types': 'off',
        'fp/no-let': 'off',
        '@typescript-eslint/prefer-for-of': 'off',
        'fp/no-loops': 'off',
        'func-style': ['error', 'declaration'],
      },
    },
    {
      files: ['./src/guards/**/*.ts'],
      rules: {
        'func-style': 'off',
      },
    },
  ],
});
