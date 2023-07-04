import type { Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import viteCompression from 'vite-plugin-compression'
import { icons } from './icons'
import { html } from './html'
import { mock } from './mock'
import { restart } from './restart'
import { jsx } from './jsx'
import { setupName } from './setupName'
import { importImgs } from './importImgs'
import OptimizationPersist from 'vite-plugin-optimize-persist'
import PkgConfig from 'vite-plugin-package-config'
import { autoImport } from './autoImport'
import { buildVisualizer } from './buildVisualizer'
import { viteBuildInfo } from './buildInfo'
import { componentTS } from './autoComponents'
export const autoPath = 'src/type'
export const createPlugin = (viteEnv: ViteEnv, isBuild: boolean, _command: string) => {
  const { VITE_APP_TITLE, VITE_APP_MOCK, VITE_APP_ANALYSIS, VITE_APP_AUTO_IMPORT } = viteEnv
  const vitePlugins: (Plugin | Plugin[])[] = [
    vue(),
    viteCompression({
      verbose: true, //是否在控制台输出压缩结果
      disable: false, //是否禁用,相当于开关在这里
      threshold: 10240, //体积大于 threshold 才会被压缩,单位 b，1b=8B, 1B=1024KB  那我们这里相当于 9kb多吧，就会压缩
      algorithm: 'gzip', //压缩算法,可选 [ 'gzip' , 'brotliCompress' ,'deflate' , 'deflateRaw']
      ext: '.gz', //文件后缀
      filter: () => true
    })
  ]
  // autoImport  unplugin-auto-import/vite
  vitePlugins.push(autoImport(VITE_APP_AUTO_IMPORT))
  // componentTS  unplugin-vue-components/vite
  vitePlugins.push(componentTS())
  // icons  vite-plugin-svg-icons
  vitePlugins.push(icons())
  // title  vite-plugin-html
  vitePlugins.push(html(VITE_APP_TITLE) as unknown as Plugin)
  // vite-plugin-mock
  vitePlugins.push(mock(VITE_APP_MOCK))
  // restart vite-plugin-restart
  vitePlugins.push(restart())
  // jsx插件
  vitePlugins.push(jsx())
  // build info
  vitePlugins.push(viteBuildInfo())
  // setup name
  vitePlugins.push(setupName())
  // import images
  vitePlugins.push(importImgs())
  // 优化vite首次启动慢
  vitePlugins.push(PkgConfig())
  vitePlugins.push(OptimizationPersist())
  // rollup打包分析插件
  // eslint-disable-next-line no-unused-expressions
  VITE_APP_ANALYSIS && isBuild && vitePlugins.push(buildVisualizer())
  return vitePlugins
}
