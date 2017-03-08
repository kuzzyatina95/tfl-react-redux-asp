import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import App from './containers/App'
import Journey from './containers/Journey'
import Arrivals from './containers/Arrivals'



import configureStore from './store/configureStore'



const store = configureStore();

const history = syncHistoryWithStore(browserHistory, store)

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <Route path="journey" component={Journey}>
        </Route>
        <Route path="arrivals" component={Arrivals}>
        </Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)