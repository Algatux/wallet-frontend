export const doLogin = () => {
    return {
        type: 'DO_LOGIN',
        payload: {
            user: {
                name: 'alga'
            }
        }
    }
}

export const doLogout = () => {
    return { type: 'DO_LOGOUT' }
}