'use strict';

import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import store from './store'

import Root from './components/Root'


render(
  <Root store={store} />,
  document.getElementById('main')
)
