/// <reference types="vitest" />
import { defineConfig } from 'vite-plus';

export default defineConfig({
  staged: {
    '*': 'vp check --fix',
  },
  fmt: {
    arrowParens: 'avoid',
    bracketSpacing: true,
    endOfLine: 'lf',
    htmlWhitespaceSensitivity: 'css',
    bracketSameLine: false,
    jsxSingleQuote: false,
    printWidth: 80,
    proseWrap: 'always',
    quoteProps: 'consistent',
    semi: true,
    singleQuote: true,
    tabWidth: 2,
    trailingComma: 'all',
    useTabs: false,
    sortPackageJson: false,
    ignorePatterns: ['node_modules', 'dist', 'coverage', '*.mdx'],
  },
  test: {
    globals: true,
    coverage: {
      provider: 'v8',
      reporter: ['json-summary', 'text'],
    },
  },
});
