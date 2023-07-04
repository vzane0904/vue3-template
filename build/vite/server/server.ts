import { type ServerOptions } from 'vite'
import { createProxy } from './proxy'

export const server = (ViteEvn: ViteEnv): ServerOptions => {
  const { VITE_APP_PORT, VITE_APP_HTTPS, VITE_APP_PROXY, VITE_APP_OPEN } = ViteEvn
  return {
    open: VITE_APP_OPEN,
    host: true,
    port: VITE_APP_PORT,
    https: VITE_APP_HTTPS,
    strictPort: false,
    proxy: createProxy(VITE_APP_PROXY)
  }
}
