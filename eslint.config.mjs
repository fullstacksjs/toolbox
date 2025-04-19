import { defineConfig } from '@fullstacksjs/eslint-config';

export default defineConfig(
  {
    typescript: {
      tsconfigRootDir: import.meta.dirname,
    },
    ignores: ['lib'],
  },
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
    },
  },
  {
    files: ['./src/guards/**/*.ts', '**/*.spec.ts'],
    rules: {
      'func-style': 'off',
    },
  },
);
