const root = '/platform/api/'
const isPro = Object.is(process.env.NODE_ENV, 'development')


// const API = process.env.NODE_ENV === 'development' ? 'http://localhost:8080' + root : 'http://o2omall.nbfangcun.com' + root
export const IS_MOCK = false

export const API_BASE_URL = IS_MOCK ? '/mock/' : 'http://o2omall.nbfangcun.com' + root

export const TOKEN_KEY = 'X-Nideshop-Token'
export const HISTORY_KEY = 'History-Key'
