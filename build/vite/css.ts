import { type CSSOptions } from 'vite'

export const css = (ViteEvn: ViteEnv): CSSOptions => {
  const { VITE_APP_PREFIXCLS } = ViteEvn
  return {
    preprocessorOptions: {
      less: {
        modifyVars: {
          prefix: VITE_APP_PREFIXCLS
        },
        javascriptEnabled: true
      }
    }
  }
}
