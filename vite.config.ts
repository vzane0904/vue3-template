import { defineConfig, loadEnv } from 'vite'
import { resolve } from './build/vite/resolve'
import { createPlugin } from './build/vite/plugin'
import { wrapperEnv } from './build/utils'
import { build } from './build/vite/build'
import { optimize } from './build/vite/optimize'
import { server } from './build/vite/server/server'
import { define } from './build/vite/define'
import { css } from './build/vite/css'
export default defineConfig(({ command, mode }) => {
  const root = process.cwd()
  const env = loadEnv(mode, root)
  const isBuild = command === 'build'
  const ViteEvn = wrapperEnv(env)
  const { VITE_APP_LOG } = ViteEvn

  return {
    plugins: createPlugin(ViteEvn, isBuild, command),
    resolve: resolve(),
    esbuild: {
      pure: VITE_APP_LOG ? ['console.log', 'debugger'] : []
    },
    define: define(),
    css: css(ViteEvn),
    build: build(ViteEvn),
    optimizeDeps: optimize(),
    base: '/',
    server: server(ViteEvn)
  }
})
