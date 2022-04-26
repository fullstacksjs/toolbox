module.exports = {
  root: true,
  extends: ['@fullstacksjs', '@fullstacksjs/eslint-config/esm.js'],
  rules: {
    '@typescript-eslint/ban-types': 'off',
  },
  overrides: [
    {
      files: ['__tests__/**/*.ts'],
      rules: {
        'max-lines-per-function': 'off',
      },
    },
  ],
};
