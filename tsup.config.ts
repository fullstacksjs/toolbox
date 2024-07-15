import {defineConfig} from 'tsup';

export default defineConfig({
  entry: ['src/**/!(*.spec).ts'],
  splitting: true,
  sourcemap: true,
  treeshake: true,
  legacyOutput: true,
  bundle: false,
  format: ['esm', 'cjs'],
  outDir: './lib/cjs',
});
