import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { createLogger } from 'redux-logger'
import authentication  from './reducers/authentication'
import wallets from './reducers/wallets'

import Layout from './containers/Layout'

import registerServiceWorker from './registerServiceWorker'

const logger = createLogger();
const reducers = combineReducers({
    authentication,
    wallets
});

const initialStore = {
    authentication: {
        authenticated: false,
        user: null
    },
    wallets : []
};

const store = createStore(reducers, initialStore, applyMiddleware(logger));

ReactDOM.render(<Provider store={store}><Layout /></Provider>, document.getElementById('root'));

registerServiceWorker();
