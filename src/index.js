import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { createLogger } from 'redux-logger'

import Layout from './containers/Layout'

import registerServiceWorker from './registerServiceWorker'

const reducer = (store) => {
    console.log('reducing store', store);
    return Object.assign({}, store);
};

const store = createStore(reducer, {}, applyMiddleware(createLogger()));

store.dispatch({
    type: 'TEST'
});

ReactDOM.render(<Provider store={store}><Layout /></Provider>, document.getElementById('root'));

registerServiceWorker();
