import {API_ENDPOINT} from '../common/envVars';

export const doLogout = () => {
    return { type: 'DO_LOGOUT' }
}

export function requestToken() {

    console.log(API_ENDPOINT);

    return dispatch => {

        return dispatch({
            type: 'DO_LOGIN',
            payload: fetch(API_ENDPOINT + `/requestToken`)
                .then(response => {
                    console.log(response)
                    if (response.status !== 200) {
                        throw Error('Login failed');
                    }

                    return response;
                })
                .then(response => response.json())

        }).catch(response => dispatch({
            type: 'DO_LOGIN_FAILED',
            payload: response
        }))

    }
}
