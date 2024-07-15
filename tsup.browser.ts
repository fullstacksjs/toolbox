import {defineConfig} from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  splitting: true,
  sourcemap: true,
  treeshake: true,
  minify: true,
  legacyOutput: true,
  bundle: true,
  globalName: 'Toolbox',
  format: 'iife',
  outDir: './lib',
});
