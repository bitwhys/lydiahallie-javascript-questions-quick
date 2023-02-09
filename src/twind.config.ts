import { defineConfig } from '@twind/core'
import presetTailwind from '@twind/preset-tailwind/base'
import presetAutoprefix from '@twind/preset-autoprefix'
import { mauveDark as neutral } from '@twind/preset-radix-ui/colors'

export default defineConfig({
  presets: [presetAutoprefix(), presetTailwind({ colors: { neutral } })],
  /* config */
})
