// Generated by 'unplugin-auto-import'
export {}
declare global {
  const CSSMinifier: typeof import('./utils/minify/css')['CSSMinifier']
  const JSMinifier: typeof import('./utils/minify/js')['JSMinifier']
  const JSONMinifier: typeof import('./utils/minify/json')['JSONMinifier']
  const MAX_CACHE: typeof import('./utils/cache')['MAX_CACHE']
  const SUPPORTED_MINIFY_MIMES: typeof import('./utils/minify/index')['SUPPORTED_MINIFY_MIMES']
  const getContentMime: typeof import('./utils/mime')['getContentMime']
  const getPathOnly: typeof import('./utils/path')['getPathOnly']
  const invalidRequestPath: typeof import('./utils/invalid-request')['invalidRequestPath']
  const minify: typeof import('./utils/minify/index')['minify']
  const parseGithubURL: typeof import('./utils/parse')['parseGithubURL']
  const parseNPMURL: typeof import('./utils/parse')['parseNPMURL']
  const removeHash: typeof import('./utils/path')['removeHash']
  const removeQuery: typeof import('./utils/path')['removeQuery']
  const removeTrailingSlash: typeof import('./utils/path')['removeTrailingSlash']
  const stringToUint8Array: typeof import('./utils/convert')['stringToUint8Array']
  const uint8ArrayToString: typeof import('./utils/convert')['uint8ArrayToString']
}
