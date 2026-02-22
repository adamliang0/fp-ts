import { defineConfig } from '@rslib/core';

export default defineConfig({
  lib: [
    {
      format: 'esm',
      syntax: 'es6',
      dts: {
        distPath: "./dist/types"
      }
    },
    {
      format: 'cjs',
      syntax: 'es5',
    },
  ],
  output: {
    target: 'node',
    cleanDistPath: true,
    distPath: "./dist",
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
