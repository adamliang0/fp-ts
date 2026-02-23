import { readdirSync, readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'

/**
 * Automates the exports property in the package manifest. There are 122 exports and manually inputting them is time consuming to say the least.
 */

const PKG_PATH = path.resolve('package.json')

const ESM_DIR = path.resolve('dist/esm')
const CJS_DIR = path.resolve('dist/cjs')
const TYPES_DIR = path.resolve('dist/types')

// If true, will export "./internal" too. Usually you want false.
const EXPORT_INTERNAL = false

function listBasenames(dir, exts): Set<string> {
  const files = readdirSync(dir, { withFileTypes: true })
    .filter((d) => d.isFile())
    .map((d) => d.name)

  const names = new Set<string>()
  for (const f of files) {
    for (const ext of exts) {
      if (f.endsWith(ext)) {
        names.add(f.slice(0, -ext.length))
        break
      }
    }
  }
  return names
}

// Adjust extensions if your build emits .mjs/.cjs differently
const esmNames = listBasenames(ESM_DIR, ['.mjs'])
const cjsNames = listBasenames(CJS_DIR, ['.js'])
const typeNames = listBasenames(TYPES_DIR, ['.d.ts'])

// Only export modules that have at least types + one runtime, or both runtimes.
// Tweak this policy if you want.
const allNames = new Set([...typeNames, ...esmNames, ...cjsNames])

function isOkName(name: string): boolean {
  if (!EXPORT_INTERNAL && name === 'internal') return false
  // optionally skip sourcemap helpers, etc.
  if (name.endsWith('.map')) return false
  return true
}

const pkg = JSON.parse(readFileSync(PKG_PATH, 'utf8'))

const exportsMap = {}
const sorted = [...allNames].filter(isOkName).sort((a, b) => a.localeCompare(b))

for (const name of sorted) {
  const key = name === 'index' ? '.' : `./${name}`

  const entry: {
    types?: string
    import?: string
    require?: string
  } = {}

  if (typeNames.has(name)) entry.types = `./dist/types/${name}.d.ts`
  if (esmNames.has(name)) entry.import = `./dist/esm/${name}.mjs`
  if (cjsNames.has(name)) entry.require = `./dist/cjs/${name}.js`

  // If you emit CJS as .js (not .cjs), swap the line above for:
  // if (cjsNames.has(name)) entry.require = `./dist/cjs/${name}.js`;

  // Only include entries that resolve to something
  if (Object.keys(entry).length > 0) {
    exportsMap[key] = entry
  }
}

// Preserve any existing non-generated exports you want.
// If you have custom entries, you can merge instead of replace.
pkg.exports = exportsMap

writeFileSync(PKG_PATH, JSON.stringify(pkg, null, 4) + '\n', 'utf8')
console.log(`Generated ${Object.keys(exportsMap).length} export entries.`)
