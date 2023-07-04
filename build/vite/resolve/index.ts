import type { AliasOptions, ResolveOptions } from 'vite'
import { createAlias } from './alias'
export * from './extensions'
import { fileURLToPath, URL } from 'node:url'
import { extensions } from './extensions'

type Resolve = ResolveOptions & {
  alias?: AliasOptions
}

export const resolve = (): Resolve => {
  return {
    alias: createAlias(fileURLToPath(new URL('../../../', import.meta.url))),
    extensions
  }
}
