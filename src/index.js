import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import Layout from './containers/Layout'

import registerServiceWorker from './registerServiceWorker'
import configureStore from './configureStore'

const store = configureStore();

ReactDOM.render(<Provider store={store}><Layout /></Provider>, document.getElementById('root'));

registerServiceWorker();
