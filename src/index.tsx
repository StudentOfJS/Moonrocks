import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './App'

import { BrowserRouter } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'
import { injectGlobal } from "./theme"

// tslint:disable-next-line:no-unused-expression
injectGlobal`{ 
  body {
    margin: 0; 
    padding: 0; 
  }

}
`
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root') as HTMLElement
)
registerServiceWorker()
