import AutoImport from 'unplugin-auto-import/vite'
import { autoPath } from '.'
export const autoImport = (isOPen: boolean) => {
  return AutoImport({
    include: [
      /\.vue$/,
      /\.vue\?vue/,
      /\.[tj]sx?$/ // .ts, .tsx, .js, .jsx
    ],
    imports: ['vue', 'vue-router', 'vue-i18n', '@vueuse/head', '@vueuse/core', 'pinia'],
    dts: autoPath + '/auto-import.d.ts',
    eslintrc: {
      enabled: isOPen, // 是否重新生成配置文件，建议生成一次即可避免每次工程启动都生成
      filepath: './.eslintrc-auto-import.json', // 生成json文件
      globalsPropValue: true
    }
  })
}
