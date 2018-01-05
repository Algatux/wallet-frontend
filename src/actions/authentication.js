
import ApiClient from '../common/ApiClient'

export const doLogout = () => {
    return { type: 'DO_LOGOUT' }
}

export function doLogin(authData) {

    return dispatch => {
        return dispatch({
            type: 'DO_LOGIN',
            payload: ApiClient.login()

        }).catch(response => dispatch({
            type: 'DO_LOGIN_FAILED',
            payload: response
        }))

    }
}


export function doRequestRefreshToken() {

    return dispatch => {

        // return dispatch({
        //     type: 'DO_REQUEST_REFRESH_TOKEN',
        //     payload: fetch(API_ENDPOINT + `/requestRefreshToken`)
        //         .then(response => {
        //
        //             return response;
        //         })
        //         .then(response => response.json())
        //
        // }).catch(response => dispatch({
        //     type: 'DO_REQUEST_REFRESH_TOKEN_FAILED',
        //     payload: response
        // }))

    }
}
