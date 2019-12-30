const initialState = {
    userAccess :{
    }

}
export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case 'SUCCESS_FETCH_USER':
            return {...state, userAccess: action.userAccess}
        case 'AUTHENTICATION_LOGIN_USERNAME':
            return {...state, userAccess: {...state.userAccess, userName: action.userName}}

        default:return state
    }
}