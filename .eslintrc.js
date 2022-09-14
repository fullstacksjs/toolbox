module.exports = {
  root: true,
  extends: ['@fullstacksjs', '@fullstacksjs/eslint-config/esm.js'],
  rules: {
    '@typescript-eslint/ban-types': 'off',
  },
  overrides: [
    {
      files: ['*.spec.ts'],
      rules: {
        'max-lines-per-function': 'off',
        'jest/no-deprecated-functions': 'off',
        'jest/unbound-method': 'off',
        'jest/require-hook': 'off',
      },
    },
  ],
};
