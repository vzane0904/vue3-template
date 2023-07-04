import type { Alias, AliasOptions } from 'vite'

const aliasList = [
  ['@', '/src'],
  ['@assets', '/src/assets'],
  ['@styles', '/src/styles'],
  ['@components', '/src/components'],
  ['@views', '/src/views'],
  ['@pinia', '/src/pinia'],
  ['@api', '/src/api'],
  ['@utils', '/src/utils'],
  ['@type', '/src/type'],
  ['@public', '/public'],
  ['@style', '/src/style']
]
export const createAlias = (path: string): AliasOptions => {
  const alias: Alias[] = []
  for (const item of aliasList) {
    alias.push({
      find: item[0],
      replacement: path + item[1]
    })
  }
  return alias
}
