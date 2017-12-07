import { createStore, applyMiddleware, combineReducers } from 'redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import promise from 'redux-promise-middleware'

import authenticationReducer  from './reducers/authentication'
import walletsReducer from './reducers/wallets'

const reducers = combineReducers({
    authentication: authenticationReducer,
    wallets: walletsReducer
});

const initialStore = {
    authentication: {
        authenticated: false,
        user: null
    },
    wallets : {
        isFetching: false,

    }
};

export default function configureStore(preloadedStore) {
    return createStore(
        reducers,
        preloadedStore ? preloadedStore : initialStore,
        applyMiddleware(
            promise(),
            thunkMiddleware,
            createLogger()
        )
    )
}
