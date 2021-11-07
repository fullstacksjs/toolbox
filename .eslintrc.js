module.exports = {
  root: true,
  plugins: ['jest-formatting'],
  extends: ['@fullstacksjs', '@fullstacksjs/eslint-config/esm.js'],
  rules: {
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/array-type': 'off',
    'dot-notation': 'off',
  },
  overrides: [
    {
      files: ['__test__'],
      rules: {
        'max-lines-per-function': 'off',
      },
    },
  ],
};
