import { defineConfig } from '@rslib/core';

export default defineConfig({
  lib: [
    {
      format: 'esm',
      syntax: 'es6',
      dts: {
        distPath: './dist/types',
      },
      output: {
        distPath: './dist/esm',
      },
    },
    {
      format: 'cjs',
      syntax: 'es5',
      output: {
        distPath: './dist/cjs',
      },
    },
  ],
  output: {
    target: 'node',
    minify: {
      jsOptions: {
        minimizerOptions: {
          format: {
            comments: 'all',
          }
        }
      }
    }
  },
  source: {
    entry: {
      index: "src/index.ts"
    },
    tsconfigPath: './tsconfig.app.json'
  }
});
