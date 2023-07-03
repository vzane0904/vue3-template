import { type RouteLocationNormalized, type NavigationGuardNext } from 'vue-router'

export const beforeEach = (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) => {
  next()
}
