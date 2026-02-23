/// <reference types="vitest" />
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    typecheck: { enabled: true },
    include: ['./test/**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    exclude: ['./test/**/util.ts'],
    globals: true,
    coverage: {
      provider: 'istanbul'
    }
  }
})
