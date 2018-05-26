import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './App'

import registerServiceWorker from './registerServiceWorker'
import { injectGlobal } from "./theme"

// tslint:disable-next-line:no-unused-expression
injectGlobal`{ 
  body {
    margin: 0; 
    padding: 0; 
  }
  h1 {
    color: red;
  }

}
`
ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
)
registerServiceWorker()
