import VueMacros from 'unplugin-vue-macros/vite'

export const setupName = () => {
  // support name
  return VueMacros({
    plugins: {
      // vue: Vue(),
      // vueJsx: VueJsx(),
    }
  })
}
