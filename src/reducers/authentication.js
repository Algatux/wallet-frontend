
const authentication = (state = {}, action) => {

    switch(action.type){
        case 'DO_LOGIN' : {
            return Object.assign({}, state, action.payload, {authenticated: true});
        }case 'DO_LOGOUT' : {
            return Object.assign({}, state, {authenticated: false});
        }
        default:
            return state;
    }

}

export default authentication
