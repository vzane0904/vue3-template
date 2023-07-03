import type { App } from 'vue'
import { setupPinia } from '@/stores'
import { setRoute } from '@/router'
import installAllDirective from '@/directive'
import '@/ui/index'

export const bootstrap = (app: App<Element>) => {
  setupPinia(app)
  setRoute(app)
  installAllDirective(app)

  app.mount('#app')
}
