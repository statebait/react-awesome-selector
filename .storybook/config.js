import { configure, addDecorator } from '@storybook/react'
import { withPropsTable } from 'storybook-addon-react-docgen'
import { setConsoleOptions, withConsole } from '@storybook/addon-console'

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.js$/)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
setConsoleOptions({
  panelExclude: [],
})
addDecorator(withPropsTable)
addDecorator((storyFn, context) => withConsole()(storyFn)(context))
