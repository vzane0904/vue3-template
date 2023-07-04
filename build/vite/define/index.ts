import pkg from '../../../package.json'
const { name, version } = pkg
const APP_INFO = {
  pkg: {
    name,
    version
  },
  lastBuildTime: Number(new Date())
}
export const define = (): Record<string, any> => {
  return {
    __APP_INFO__: JSON.stringify(APP_INFO)
  }
}
