export const doLogout = () => {
    return { type: 'DO_LOGOUT' }
}

export function requestToken() {

    return {
        type: 'DO_LOGIN',
        payload: fetch(`http://localhost:3001/user`).then(response => response.json())
    }
}