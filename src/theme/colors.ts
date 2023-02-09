import { mauve, grass, red } from '@radix-ui/colors'

const purple = {
  50: '#fde3ff',
  100: '#edb2ff',
  200: '#de7fff',
  300: '#d04cff',
  400: '#c31aff',
  500: '#a900e6',
  600: '#8300b4',
  700: '#5f0082',
  800: '#390050',
  900: '#16001f',
}
export const colors = {
  neutral: [...Object.values(mauve)],
  positive: [...Object.values(grass)],
  negative: [...Object.values(red)],
  purple: [...Object.values(purple)],
}
