import { type BuildOptions } from 'vite'

export const build = (ViteEvn: ViteEnv): BuildOptions => {
  const { VITE_APP_BUILD, VITE_APP_SOURCEMAP } = ViteEvn

  return {
    target: 'modules',
    outDir: VITE_APP_BUILD,
    cssTarget: 'chrome86',
    minify: 'terser',
    sourcemap: VITE_APP_SOURCEMAP,
    chunkSizeWarningLimit: 30000,
    terserOptions: {
      compress: {
        /* eslint-disable camelcase */
        drop_console: true,
        dead_code: true
        /* eslint-enable camelcase */
      }
    },
    rollupOptions: {
      // external: ['vue', 'vuex', 'axios', 'vue-router'],
      output: {
        chunkFileNames: 'static/js/[name]-[hash].js',
        entryFileNames: 'static/js/[name]-[hash].js',
        assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
        manualChunks(id: string) {
          if (id.includes('node_modules')) {
            return /node_modules\/(?!.pnpm).*/.exec(id)![0].split('node_modules/')[1].split('/')[0]
          }
        }
        // manualChunks: {
        //   jsonWorker: [`${prefix}/language/json/json.worker`],
        //   cssWorker: [`${prefix}/language/css/css.worker`],
        //   htmlWorker: [`${prefix}/language/html/html.worker`],
        //   tsWorker: [`${prefix}/language/typescript/ts.worker`],
        //   editorWorker: [`${prefix}/editor/editor.worker`],
        // },
      }
    }
  }
}
