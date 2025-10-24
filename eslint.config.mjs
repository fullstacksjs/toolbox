import { defineConfig } from '@fullstacksjs/eslint-config';

export default defineConfig(
  {
    strict: true,
    typescript: {
      projectService: {
        allowDefaultProject: ['*.ts'],
      },
    },
    ignores: ['lib'],
  },
  {
    files: ['./src/guards/**/*.ts', '**/*.spec.ts'],
    rules: {
      '@typescript-eslint/no-non-null-assertion': 'off',
    },
  },
);
