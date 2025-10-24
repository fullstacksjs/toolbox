import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/**/!(*.spec).ts', '!src/runtime/fixtures.ts'],
  splitting: true,
  sourcemap: true,
  treeshake: true,
  legacyOutput: true,
  bundle: false,
  format: ['esm', 'cjs'],
  outDir: './lib/cjs',
});
