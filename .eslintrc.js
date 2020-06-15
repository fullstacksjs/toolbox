module.exports = {
  root: true,
  extends: ['@frontendmonster'],
  parserOptions: {
    project: ['./tsconfig.eslint.json'],
  },
  rules: {
    '@typescript-eslint/ban-types': 'off',
  },
};
