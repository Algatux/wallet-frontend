
const authentication = (state = {}, action) => {

    switch(action.type){
        case 'DO_LOGIN' : {
            return Object.assign({}, state, {authenticated: true, user: { name : 'alga'}});
        }
        default:
            return state;
    }

}

export default authentication
