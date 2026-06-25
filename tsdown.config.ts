import { defineConfig } from 'tsdown';

export default defineConfig([
  {
    entry: ['src/**/!(*.spec).ts', '!src/runtime/fixtures.ts'],
    sourcemap: true,
    treeshake: true,
    unbundle: true,
    format: 'esm',
    outDir: './lib/esm',
    platform: 'node',
    fixedExtension: false,
  },
  {
    entry: ['src/**/!(*.spec).ts', '!src/runtime/fixtures.ts'],
    sourcemap: true,
    treeshake: true,
    unbundle: true,
    format: 'cjs',
    outDir: './lib/cjs',
    platform: 'node',
  },
  {
    entry: ['src/index.ts'],
    sourcemap: true,
    treeshake: true,
    minify: true,
    globalName: 'Toolbox',
    format: 'iife',
    outDir: './lib/browser',
    platform: 'browser',
  },
]);
