import { defineConfig } from 'vite'
import { resolve } from 'path'
import { readdirSync, existsSync } from 'fs'

function getTalkEntries() {
  const talksDir = resolve(__dirname, 'talks')
  if (!existsSync(talksDir)) return {}

  const entries = {}
  for (const talk of readdirSync(talksDir)) {
    const indexPath = resolve(talksDir, talk, 'index.html')
    if (existsSync(indexPath)) {
      entries[`talks/${talk}/index`] = indexPath
    }
  }
  return entries
}

export default defineConfig({
  base: './',
  publicDir: false,
  build: {
    outDir: 'public',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        ...getTalkEntries(),
      },
    },
  },
})
