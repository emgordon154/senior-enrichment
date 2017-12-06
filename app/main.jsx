'use strict';

import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'

import store from './store'
import WinterJokes from './components/WinterJokes'

render(
  <Provider store={store}>
    <WinterJokes />
  </Provider>,
  document.getElementById('main')
)
