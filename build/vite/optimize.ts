import type { DepOptimizationOptions } from 'vite'

export const optimize = (): DepOptimizationOptions => {
  return {
    include: [
      'vue',
      'vue-router',
      'pinia',
      'pinia-plugin-persistedstate',
      'axios',
      'naive-ui',
      'nprogress',
      '@vicons/ionicons5',
      '@vueuse/core',
      'dayjs',
      // 'default-passive-events',
      'lodash-es',
      'screenfull',
      'vue-i18n',
      'Clipboard'
    ],
    exclude: []
  }
}
