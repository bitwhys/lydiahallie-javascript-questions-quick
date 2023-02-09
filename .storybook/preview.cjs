import install from '@twind/with-react'
import twindConfig from '../src/twind.config'

import '@fontsource/lexend/variable.css'
import '@fontsource/fira-code/variable.css'
install(twindConfig)
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
