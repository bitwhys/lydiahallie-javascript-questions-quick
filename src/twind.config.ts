import { defineConfig } from '@twind/core'
import presetTailwind from '@twind/preset-tailwind/base'
import defaultTheme from '@twind/preset-tailwind/defaultTheme'
import presetAutoprefix from '@twind/preset-autoprefix'
import {
  mauve as neutral,
  mauveDark as neutralDark,
  grass as positive,
  grassDark as positiveDark,
  red as negative,
  redDark as negativeDark,
} from '@twind/preset-radix-ui/colors'

// Optional: enable automatic dark colors
import darkColor from '@twind/preset-radix-ui/darkColor'

export default defineConfig({
  presets: [
    presetAutoprefix(),
    presetTailwind({
      colors: {
        neutral,
        neutralDark,
        positive,
        positiveDark,
        negative,
        negativeDark,
        purple: {
          1: '#fde3ff',
          2: '#edb2ff',
          3: '#de7fff',
          4: '#d04cff',
          5: '#c31aff',
          6: '#a900e6',
          7: '#8300b4',
          8: '#5f0082',
          9: '#390050',
          10: '#16001f',
        },
        purpleDark: {
          10: '#fde3ff',
          9: '#edb2ff',
          8: '#de7fff',
          7: '#d04cff',
          6: '#c31aff',
          5: '#a900e6',
          4: '#8300b4',
          3: '#5f0082',
          2: '#390050',
          1: '#16001f',
        },
      },
    }),
  ],
  /* config */
  theme: {
    boxShadow: {
      xs: '0px 0px 1px rgba(26, 32, 36, 0.32), 0px 1px 2px rgba(91, 104, 113, 0.32)',
      sm: '0px 0px 1px rgba(26, 32, 36, 0.32), 0px 4px 8px rgba(91, 104, 113, 0.24)',
      md: '0px 0px 1px rgba(26, 32, 36, 0.32), 0px 8px 16px rgba(91, 104, 113, 0.24)',
      lg: '0px 0px 1px rgba(26, 32, 36, 0.32), 0px 12px 24px rgba(91, 104, 113, 0.24)',
      xl: '0px 0px 1px rgba(26, 32, 36, 0.32), 0px 24px 32px rgba(91, 104, 113, 0.24)',
      '2xl': '0px 0px 1px rgba(26, 32, 36, 0.32), 0px 40px 64px rgba(91, 104, 113, 0.24)',
    },
    fontFamily: {
      sans: ['LexendVariable', defaultTheme.fontFamily.sans],
      mono: ['Fira CodeVariable', defaultTheme.fontFamily.mono],
    },
  },
})
