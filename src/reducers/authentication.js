
const authentication = (state = {}, action) => {

    switch(action.type){
        case 'DO_LOGIN_FULFILLED' : {
            console.log('payload', action.payload)

            return Object.assign({}, state, {user: action.payload}, {authenticated: true});
        }case 'DO_LOGOUT' : {
            return Object.assign({}, state, {authenticated: false, user: null});
        }
        default:
            return state;
    }

}

export default authentication
