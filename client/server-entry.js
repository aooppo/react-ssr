import React from 'react'
import { StaticRouter } from 'react-router-dom'
import { Provider, useStaticRendering } from 'mobx-react'

import { JssProvider } from 'react-jss'
import { MuiThemeProvider } from 'material-ui/styles'

import App from './views/App'
import { createStoreMap } from './store'

// export default <App />
useStaticRendering(true)

export default (stores, routerContext, sheetRegistry, generateClassName, theme, url) => (
  <Provider {...stores}>
    <StaticRouter context={routerContext} location={url}>
      <JssProvider registry={sheetRegistry} generateClassName={generateClassName}>
        <MuiThemeProvider theme={theme} sheetsManager={new Map()}>
          <App />
        </MuiThemeProvider>
      </JssProvider>
    </StaticRouter>
  </Provider>
)

export { createStoreMap }
