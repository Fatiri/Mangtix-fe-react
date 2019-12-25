const initialState = {
    userAccess :{
        userName : "",
        password : ""
    }

}
export default function loginReducer(state = initialState, action) {
    switch (action.type) {
        case 'AUTHENTICATION_LOGIN_USERNAME':
            return {...state, userAccess :{...state.userAccess, userName: action.userName}}
        case 'AUTHENTICATION_LOGIN_PASSWORD':
            return {...state, userAccess :{...state.userAccess, password: action.password}}
        default: return state
    }
}
