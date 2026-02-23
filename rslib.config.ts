import { defineConfig } from '@rslib/core'

export default defineConfig({
  lib: [
    {
      format: 'esm',
      syntax: 'es6',
      dts: {
        distPath: './dist/types'
      },
      bundle: false,
      output: {
        distPath: './dist/esm',
        module: true
      }
    },
    {
      format: 'cjs',
      syntax: 'es5',
      bundle: false,
      output: {
        distPath: './dist/cjs',
        module: false
      }
    }
  ],
  output: {
    target: 'node',
    minify: true,
    cleanDistPath: true
  },
  performance: {
    chunkSplit: {
      strategy: 'split-by-experience'
    }
  },
  source: {
    tsconfigPath: './tsconfig.app.json',
    entry: {
      index: 'src'
    }
  }
})
